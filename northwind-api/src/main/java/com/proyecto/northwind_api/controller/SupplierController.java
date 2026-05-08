package com.proyecto.northwind_api.controller;

import com.proyecto.northwind_api.model.Supplier;
import com.proyecto.northwind_api.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
@CrossOrigin(origins = "http://localhost:4200")
public class SupplierController {

    @Autowired
    private SupplierService service;

    @GetMapping
    public ResponseEntity<List<Supplier>> listarTodos() {
        List<Supplier> suppliers = service.listarTodos();
        if (suppliers.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(suppliers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Supplier> obtenerPorId(@PathVariable Integer id) {
        Supplier supplier = service.obtenerPorId(id);
        if (supplier == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(supplier);
    }

    @PostMapping
    public ResponseEntity<Supplier> agregarProveedor(@RequestBody Supplier s) {
        try {
            Supplier nuevo = service.agregarProveedor(s);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Supplier> actualizarProveedor(@PathVariable Integer id, @RequestBody Supplier s) {
        try {
            Supplier proveedorActualizado = service.actualizarProveedor(id, s);
            if (proveedorActualizado == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(proveedorActualizado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
