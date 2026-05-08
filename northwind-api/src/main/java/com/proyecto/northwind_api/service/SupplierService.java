package com.proyecto.northwind_api.service;

import com.proyecto.northwind_api.model.Supplier;
import com.proyecto.northwind_api.repository.ISupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {

    @Autowired
    private ISupplierRepository repoSupplier;

    public List<Supplier> listarTodos() {
        return repoSupplier.findAll();
    }

    public Supplier obtenerPorId(Integer id) {
        return repoSupplier.findById(id).orElse(null);
    }

    public Supplier agregarProveedor(Supplier supplier) {
        return repoSupplier.save(supplier);
    }

    public Supplier actualizarProveedor(Integer id, Supplier supplier) {
        Supplier existente = obtenerPorId(id);
        if (existente != null) {
            existente.setCompanyName(supplier.getCompanyName());
            existente.setContactName(supplier.getContactName());
            existente.setContactTitle(supplier.getContactTitle());
            existente.setAddress(supplier.getAddress());
            existente.setCity(supplier.getCity());
            existente.setCountry(supplier.getCountry());
            existente.setPhone(supplier.getPhone());
            return repoSupplier.save(existente);
        }
        return null;
    }

}
