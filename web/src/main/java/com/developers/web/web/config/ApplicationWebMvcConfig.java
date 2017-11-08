package com.developers.web.web.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.MultipartConfigElement;

/**
 * Created by danul on 27.04.2017.
 */

@Configuration
@ComponentScan("com.developers.web")
public class ApplicationWebMvcConfig extends WebMvcConfigurerAdapter {


    private static final String SWAGGER_API_VERSION = "1.0";
    private static final String LICENSE_TEXT = "License";
    private static final String title = "sample";
    private static final String description = "Documentation for the project";
    String rootPath = System.getProperty("catalina.home");
    String[] PATH = {
            "file:/" + rootPath + "/public/front/dist",
            "classpath:/META-INF/resources/",
            "classpath:/resources/",
            "classpath:/static/",
            "classpath:/public/"

    };
    @Value("${base.path.file}")
    private String basePathFile;

    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        String rootPath = System.getProperty("catalina.base");
        registry.addResourceHandler("/resources/**").addResourceLocations("file:/" + rootPath + "/resources/");
        registry.addResourceHandler("/img/**")
                .addResourceLocations("file:/" + rootPath + basePathFile);
        System.err.println("file:/" + rootPath + basePathFile);
        super.addResourceHandlers(registry);
    }


    @Bean
    MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize("512000MB");
        factory.setMaxRequestSize("512000MB");
        return factory.createMultipartConfig();
    }


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*").allowedOrigins("*").allowedMethods("GET", "POST", "OPTIONS", "PUT")
                .allowedHeaders("Content-Type", "X-Requested-With", "accept", "Origin", "Access-Control-Request-Method",
                        "Access-Control-Request-Headers")
                .exposedHeaders("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
                .allowCredentials(true).maxAge(3600);
    }


}