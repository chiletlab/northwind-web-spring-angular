package com.proyecto.northwind_api.controller;

import com.proyecto.northwind_api.model.Product;
import com.proyecto.northwind_api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<Product>> listarTodos() {
        List<Product> products = service.listarTodos();
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> obtenerPorId(@PathVariable Integer id) {
        Product product = service.obtenerPorId(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }

    @PostMapping()
    public ResponseEntity<Product> agregarProducto(@RequestBody Product p) {
        try {
            Product nuevo = service.agregarProducto(p);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> actualizarProducto(@PathVariable Integer id, @RequestBody Product p) {
        try {
            Product productoActualizado = service.actualizarProducto(id, p);
            if (productoActualizado == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(productoActualizado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
