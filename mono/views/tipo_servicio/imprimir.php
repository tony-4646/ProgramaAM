<?php
require('./fpdf/fpdf.php');
require_once("../../controllers/tipo_servicio.controllers.php"); 

$Tipo_Servicio = new Tipo_Servicio(); 

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(0, 10, 'Lista de Tipo de Servicios de Mecanica', 0, 1, 'C'); // Título centrado
$pdf->Ln(10); 

$pdf->SetFont('Arial','B',12);

$pdf->Cell(20, 10, '#', 1, 0, 'C'); 
$pdf->Cell(70, 10, 'Detalle', 1, 0, 'C');
$pdf->Cell(30, 10, 'Valor', 1, 0, 'C');
$pdf->Cell(30, 10, 'Estado', 1, 1, 'C'); 

$pdf->SetFont('Arial','',10);

$datos = $Tipo_Servicio->todos();

while ($row = mysqli_fetch_assoc($datos)) {

    $estado_texto = ($row["estado"] == 1) ? 'Activo' : 'Inactivo';

    $pdf->Cell(20, 10, $row["id"], 1, 0, 'C');      
    $pdf->Cell(70, 10, $row["detalle"], 1, 0, 'L');  
    $pdf->Cell(30, 10, $row["valor"], 1, 0, 'R');    
    $pdf->Cell(30, 10, $estado_texto, 1, 1, 'C');  
}

$pdf->Output();
?>