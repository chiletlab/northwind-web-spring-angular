package com.proyecto.northwind_api.service;

import com.proyecto.northwind_api.model.Empleado;
import com.proyecto.northwind_api.repository.IEmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoService {

    @Autowired
    private IEmpleadoRepository empleadoRepository;

    public Empleado login(String email, String password) {

        System.out.println("EMAIL INGRESADO: " + email);
        System.out.println("PASSWORD INGRESADO: " + password);

        var optionalEmpleado = empleadoRepository.findByEmail(email);

        if (optionalEmpleado.isPresent()) {
            Empleado empleado = optionalEmpleado.get();
            if (empleado.getPassword().equals(password)) {
                return empleado; // login exitoso
            }
        }
        return null;
    }

}
