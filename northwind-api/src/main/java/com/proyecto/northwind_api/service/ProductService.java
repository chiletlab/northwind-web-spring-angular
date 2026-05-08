package com.proyecto.northwind_api.service;

import com.proyecto.northwind_api.model.Product;
import com.proyecto.northwind_api.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private IProductRepository repoProducto;

    public List<Product> listarTodos() {
        return repoProducto.findAll();
    }

    public Product obtenerPorId(Integer id) {
        return repoProducto.findById(id).orElse(null);
    }

    public Product agregarProducto(Product product) {
        return repoProducto.save(product);
    }

    public Product actualizarProducto(Integer id, Product product) {
        Product existente = obtenerPorId(id);
        if (existente != null) {
            existente.setProductName(product.getProductName());
            existente.setSupplierId(product.getSupplierId());
            existente.setCategoryId(product.getCategoryId());
            existente.setQuantityPerUnit(product.getQuantityPerUnit());
            existente.setUnitPrice(product.getUnitPrice());
            existente.setUnitsInStock(product.getUnitsInStock());
            existente.setUnitsOnOrder(product.getUnitsOnOrder());
            existente.setReorderLevel(product.getReorderLevel());
            existente.setDiscontinued(product.getDiscontinued());
            return repoProducto.save(existente);
        }
        return null;
    }

}
