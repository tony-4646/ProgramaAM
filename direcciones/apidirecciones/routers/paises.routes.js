const express = require("express");
const db = require("../config/db");
const router = express.Router();

//todos paises

router.get("/", (req, res) => {
    const sql = "Select * from paises";
    db.query(sql, (err, lista_paises) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        } else {
            return res.status(200).json({ paises: lista_paises });
        }
    })
});


//uno paises

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sql = "Select * from paises WHERE id = ?";
    db.query(sql, [id], (err, pais) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (pais.length === 0) {
            return res.status(404).json({ error: "País no encontrado" });
        }
        
        return res.status(200).json({ pais: pais[0] });
    });
});

//insertar

router.post("/", (req, res) => {
    const { nombre } = req.body;
    const sql = "INSERT INTO paises (nombre) VALUES (?)";
    db.query(sql, [nombre], (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(
            {
                msg: "Pais creado correctamente",
                pais: { id: resultado.insertId, nombre }
            }
        )
    });
});

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const sql = 'UPDATE paises SET nombre = ? WHERE id = ?';
    db.query(sql, [nombre, id], (err, resultado)=>{
        if(err){
            console.log(err.message);
            return res.status(500).json({error: err.message});
        }
        if(resultado.affectedRows === 0){
            return res.status(404).json({message: 'País no encontrado'});
        }
        res.status(200).json({message: 'País actualizado correctamente'});
    });
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM paises WHERE id = ?';
    db.query(sql, [id], (err, resultado)=>{
        if(err){
            console.log(err.message);
            return res.status(500).json({error: err.message});
        }
        if(resultado.affectedRows === 0){
            return res.status(404).json({message: 'País no encontrado'});
        }
        res.status(200).json({message: 'País eliminado correctamente'});
    });
});

module.exports = router;
