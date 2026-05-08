package com.proyecto.northwind_api.controller;

import com.proyecto.northwind_api.model.DTOs.LoginRequest;
import com.proyecto.northwind_api.model.Empleado;
import com.proyecto.northwind_api.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/empleado")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        System.out.println("EMAIL INGRESADO: " + request.getEmail());
        System.out.println("PASSWORD INGRESADO: " + request.getPassword());

        Empleado empleado = empleadoService.login(
                request.getEmail(),
                request.getPassword()
        );

        if (empleado == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Email o contraseña incorrectos");
        }

        empleado.setPassword(null);

        return ResponseEntity.ok(empleado);
    }

}
