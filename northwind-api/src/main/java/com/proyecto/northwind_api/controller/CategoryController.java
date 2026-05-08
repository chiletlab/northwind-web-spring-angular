package com.proyecto.northwind_api.controller;

import com.proyecto.northwind_api.model.Category;
import com.proyecto.northwind_api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping
    public ResponseEntity<List<Category>> listarTodos() {
        List<Category> categories = service.listarTodos();
        if (categories.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> obtenerPorId(@PathVariable Integer id) {
        Category category = service.obtenerPorId(id);
        if (category == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(category);
    }

    @PostMapping
    public ResponseEntity<Category> agregarCategoria(@RequestBody Category c) {
        try {
            Category nuevo = service.agregarCategoria(c);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> actualizarCategoria(@PathVariable Integer id, @RequestBody Category c) {
        try {
            Category categoriaActualizada = service.actualizarCategoria(id, c);
            if (categoriaActualizada == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(categoriaActualizada);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
