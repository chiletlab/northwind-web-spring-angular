package com.proyecto.northwind_api.service;

import com.proyecto.northwind_api.model.Category;
import com.proyecto.northwind_api.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private ICategoryRepository repoCategory;

    public List<Category> listarTodos() {
        return repoCategory.findAll();
    }

    public Category obtenerPorId(Integer id) {
        return repoCategory.findById(id).orElse(null);
    }

    public Category agregarCategoria(Category category) {
        return repoCategory.save(category);
    }

    public Category actualizarCategoria(Integer id, Category category) {
        Category existente = obtenerPorId(id);
        if (existente != null) {
            existente.setCategoryName(category.getCategoryName());
            existente.setDescription(category.getDescription());
            return repoCategory.save(existente);
        }
        return null;
    }

}
