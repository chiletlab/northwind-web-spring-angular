package com.proyecto.northwind_api;

import com.proyecto.northwind_api.config.DotenvConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NorthwindApiApplication {

    public static void main(String[] args) {
        DotenvConfig.load();
        SpringApplication.run(NorthwindApiApplication.class, args);
    }

}
