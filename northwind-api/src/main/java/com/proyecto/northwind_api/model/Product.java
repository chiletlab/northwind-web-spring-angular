package com.proyecto.northwind_api.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "Products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProductID")
    private Integer productId;

    @Column(name = "ProductName", nullable = false, length = 40)
    private String productName;

    @Column(name = "SupplierID")
    private Integer supplierId;

    @Column(name = "CategoryID")
    private Integer categoryId;

    @Column(name = "QuantityPerUnit", length = 20)
    private String quantityPerUnit;

    @Column(name = "UnitPrice")
    private BigDecimal unitPrice;

    @Column(name = "UnitsInStock")
    private Short unitsInStock;

    @Column(name = "UnitsOnOrder")
    private Short unitsOnOrder;

    @Column(name = "ReorderLevel")
    private Short reorderLevel;

    @Column(name = "Discontinued", nullable = false)
    private Boolean discontinued = false;

    @ManyToOne
    @JoinColumn(name = "SupplierID", insertable = false, updatable = false)
    private Supplier objProveedor;

    @ManyToOne
    @JoinColumn(name = "CategoryID", insertable = false, updatable = false)
    private Category objCategoria;

}
