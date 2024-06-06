const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente');

router.post('/', async (req, res) => {
    try {
        const { ID, Nombre, Correo_electronico, Numero_de_telefono, Direccion } = req.body;
        const newCliente = new cliente({ ID, Nombre, Correo_electronico, Numero_de_telefono, Direccion });
        await newCliente.save();
        res.status(201).send('Cliente creado correctamente');
    } catch (error) {
        console.error('Error creando cliente: ', error);
        res.status(500).send('Error creando cliente');
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        console.error('Error obteniendo clientes: ', error);
        res.status(500).send('Error obteniendo clientes');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const clienteEncontrado = await cliente.findById(req.params.id);
        if (!clienteEncontrado) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.status(200).json(clienteEncontrado);
    } catch (error) {
        console.error('Error obteniendo cliente: ', error);
        res.status(500).send('Error obteniendo cliente');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { ID, Nombre, Correo_electronico, Numero_de_telefono, Direccion } = req.body;
        await cliente.findByIdAndUpdate(req.params.id, { ID, Nombre, Correo_electronico, Numero_de_telefono, Direccion });
        res.status(200).send('Cliente actualizado correctamente');
    } catch (error) {
        console.error('Error actualizando cliente: ', error);
        res.status(500).send('Error actualizando cliente');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await cliente.findByIdAndDelete(req.params.id);
        res.status(200).send('Cliente eliminado correctamente');
    } catch (error) {
        console.error('Error eliminando cliente: ', error);
        res.status(500).send('Error eliminando cliente');
    }
});

module.exports = router;