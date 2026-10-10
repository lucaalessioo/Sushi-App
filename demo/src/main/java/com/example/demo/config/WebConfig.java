package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app.upload-dir:uploads}")
    private String uploadDir;

    // Configurazione CORS per consentire l'invio e la ricezione dei Cookie HTTP-Only
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                // Specifica gli origini esatti (con allowCredentials non si può usare "*")
                .allowedOriginPatterns("http://localhost:5173", "http://127.0.0.1:5173", "http://192.168.*.*:5173")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true); // <-- FONDAMENTALE: permette il passaggio dei cookie tra domini/porte diverse
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String location = Paths.get(uploadDir, "piatti").toAbsolutePath().toUri().toString();
        if (!location.endsWith("/")) {
            location += "/";
        }
        
        registry.addResourceHandler("/uploads/piatti/**")
                .addResourceLocations(location)
                .setCacheControl(CacheControl.maxAge(30, TimeUnit.DAYS).cachePublic());
    }
}