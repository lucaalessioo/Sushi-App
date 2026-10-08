package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.UUID;

@Service
public class ImmagineStorageService {

    public static final String URL_PREFIX = "/uploads/piatti/";

    private static final Map<String, String> TIPI_AMMESSI = Map.of(
            "image/jpeg", ".jpg",
            "image/png", ".png",
            "image/webp", ".webp");

    private final Path dir;

    public ImmagineStorageService(@Value("${app.upload-dir:uploads}") String baseDir) throws IOException {
        this.dir = Paths.get(baseDir, "piatti").toAbsolutePath().normalize();
        Files.createDirectories(dir);
    }

    /** Salva il file e restituisce l'URL relativo da memorizzare nel DB. */
    public String salva(MultipartFile file) {
        String ext = TIPI_AMMESSI.get(file.getContentType());
        if (file.isEmpty() || ext == null) {
            throw new ResponseStatusException(HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                    "Formato non supportato: usa JPEG, PNG o WebP");
        }

        // Mai usare il nome originale del file: evita path traversal e collisioni
        String nome = UUID.randomUUID() + ext;
        try (InputStream in = file.getInputStream()) {
            Files.copy(in, dir.resolve(nome));
        } catch (IOException e) {
            throw new UncheckedIOException("Errore nel salvataggio dell'immagine", e);
        }
        return URL_PREFIX + nome;
    }

    /**
     * Elimina il file se l'URL punta a una nostra immagine; ignora gli URL esterni.
     */
    public void elimina(String url) {
        if (url == null || !url.startsWith(URL_PREFIX)) {
            return;
        }
        String nome = Paths.get(url.substring(URL_PREFIX.length())).getFileName().toString();
        try {
            Files.deleteIfExists(dir.resolve(nome));
        } catch (IOException ignored) {
            // un file rimasto sul disco non deve bloccare l'operazione sul piatto
        }
    }
}
