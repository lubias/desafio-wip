"use client"
import React, { useEffect, useState } from "react";
import { Label } from "@radix-ui/react-label";
import Combobox from "../Atoms/Combobox";
import axios from "@/api/mock";
import { Button } from "@/components/ui/button";

function FormMolecule() {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [colors, setColors] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [certifications, setCertifications] = useState([]);
    const [selectedCertification, setSelectedCertification] = useState(null);
    const [units, setUnits] = useState([]);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [sustComp, setSustComp] = useState([]);
    const [selectedSustComp, setSelectedSustComp] = useState(null);
    const [generatedCode, setGeneratedCode] = useState("");

    const [description, setDescription] = useState("");
    const [customerRef, setCustomerRef] = useState("");
    const [csStyleRef, setCsStyleRef] = useState("");
    const [barcode, setBarcode] = useState("");
    const [boxWeight, setBoxWeight] = useState("");
    const [boxWeightKG, setBoxWeightKG] = useState("");
    const [measure1, setMeasure1] = useState("");
    const [measure2, setMeasure2] = useState("");
    const [measure3, setMeasure3] = useState("");
    const [packsPerBox, setPacksPerBox] = useState("");
    const [coefficientPerBox, setCoefficientPerBox] = useState("");
    const [unitPrice, setUnitPrice] = useState("");

    useEffect(() => {
        axios.get("/api/create-articles").then(res => {
            if (res.data.success) setTypes(res.data.data);
        });
        axios.get("/api/size").then(res => {
            if (res.data.success) setSizes(res.data.data);
        });
    }, []);

    useEffect(() => {
        if (selectedType !== "PK") {
            setCustomers([]);
            setBrands([]);
            setColors([]);
            setCertifications([]);
            setUnits([]);
            setCurrencies([]);
            setSustComp([]);
            setSelectedCustomer(null);
            setSelectedBrand(null);
            setSelectedColor(null);
            setSelectedCertification(null);
            setSelectedUnit(null);
            setSelectedCurrency(null);
            setSelectedSustComp(null);
            return;
        }
        axios.get(`/api/create-articles/${selectedType}`).then(res => {
            if (res.data.success) {
                setCustomers(res.data.customer);
                setCertifications(res.data.certification);
                setUnits(res.data.unit);
                setCurrencies(res.data.currency);
                setSustComp(res.data.sustComp);
            }
        });
    }, [selectedType]);

    useEffect(() => {
        if (!selectedCustomer) return;
        axios.get(`/api/brand/${selectedCustomer}`).then(res => {
            if (res.data.success) setBrands(res.data.data);
        });
    }, [selectedCustomer]);

    useEffect(() => {
        if (!selectedBrand) return;
        axios.get(`/api/color/${selectedBrand}`).then(res => {
            if (res.data.success) setColors(res.data.data);
        });
    }, [selectedBrand]);

    const handleVerify = () => {
        if (
            selectedType &&
            selectedUnit &&
            selectedCustomer &&
            selectedBrand &&
            selectedColor &&
            selectedSize &&
            selectedCertification
        ) {
            const code =
                selectedType +
                selectedUnit.padStart(3, "0") +
                selectedCustomer.padStart(3, "0") +
                selectedBrand.padStart(3, "0") +
                selectedColor.padStart(3, "0") +
                selectedSize.padStart(3, "0") +
                selectedCertification.padStart(2, "0");
            setGeneratedCode(code);
        } else {
            alert("Preencha todos os campos obrigatórios para gerar o código.");
        }
    };

    const handleGravar = () => {
        if (
            !selectedType ||
            !selectedUnit ||
            !selectedCustomer ||
            !selectedBrand ||
            !selectedColor ||
            !selectedSize ||
            !selectedCertification ||
            !selectedCurrency ||
            !selectedSustComp ||
            !description ||
            !customerRef ||
            !csStyleRef ||
            !barcode ||
            !boxWeight ||
            !measure1 ||
            !measure2 ||
            !measure3 ||
            !packsPerBox ||
            !coefficientPerBox ||
            !unitPrice ||
            !boxWeightKG
        ) {
            alert("Preencha todos os campos obrigatórios antes de gravar.");
            return;
        }

        const payload = {
            type: selectedType,
            pares: selectedUnit,
            customer: selectedCustomer,
            brand: selectedBrand,
            color: selectedColor,
            size: selectedSize,
            certification: selectedCertification,
            unit: selectedUnit,
            price: unitPrice,
            currency: selectedCurrency,
            sustainableComp: selectedSustComp,
            description,
            customerRef,
            csStyleRef,
            barcode,
            boxWeight,
            boxWeightKG,
            boxMeasures: [measure1, measure2, measure3],
            packsPerBox,
            coefficientPerBox
        };

        console.log("Payload para gravar:", payload);
        localStorage.setItem("formData", JSON.stringify(payload));
        alert("Dados gravados no localstorage");

        setSelectedType("");
        setSelectedUnit("");
        setSelectedCustomer("");
        setSelectedBrand("");
        setSelectedColor("");
        setSelectedSize("");
        setSelectedCertification("");
        setSelectedCurrency("");
        setSelectedSustComp("");
        setGeneratedCode("");
        setDescription("");
        setCustomerRef("");
        setCsStyleRef("");
        setBarcode("");
        setBoxWeight("");
        setMeasure1("");
        setMeasure2("");
        setMeasure3("");
        setPacksPerBox("");
        setCoefficientPerBox("");
        setUnitPrice("");
        setBoxWeightKG("");
    };

    return (
        <div className="space-y-6 mt-5">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Tipo/Kind</Label>
                    <Combobox options={types} value={selectedType} onChange={setSelectedType} />
                </div>
            </div>

            <div><Label> &gt; Pack de Meias / Packs Assortment Socks &gt; </Label></div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 w-1/2">
                        <Label>Nº Pares / Nr. Pairs</Label>
                        <Combobox options={units} value={selectedUnit} onChange={setSelectedUnit} />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Label>Packs p/Cx</Label>
                    <input
                        type="number"
                        className="border rounded p-1 w-full"
                        value={packsPerBox}
                        onChange={e => setPacksPerBox(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Label>Coeficiente p/Cx</Label>
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={coefficientPerBox}
                        onChange={e => setCoefficientPerBox(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Cliente / Customer</Label>
                    <Combobox options={customers} value={selectedCustomer} onChange={setSelectedCustomer} />
                </div>
                <div className="col-span-1 flex items-center gap-3"></div>
                <div className="col-span-1 flex items-center gap-3">
                    <Label className="col-span-1">Marca/Brand</Label>
                    <Combobox options={brands} value={selectedBrand} onChange={setSelectedBrand} />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Cor - Sortimento / Color Assortment</Label>
                    <Combobox options={colors} value={selectedColor} onChange={setSelectedColor} />
                </div>
                <div className="col-span-1 flex items-center gap-3"></div>
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Tamanho / Size</Label>
                    <Combobox options={sizes} value={selectedSize} onChange={setSelectedSize} />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Certificação / Certification</Label>
                    <Combobox options={certifications} value={selectedCertification} onChange={setSelectedCertification} />
                </div>
            </div>

            <div className="pt-10 w-full">
                <hr className="border-2"></hr>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="flex items-center gap-3 w-1/2">
                        <Label>Designação / Description</Label>
                        <textarea
                            className="border rounded p-1 w-full resize-none"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full justify-between">
                    <div className="flex items-center gap-3">
                        <Label>Un / Unit</Label>
                        <Combobox options={units} value={selectedUnit} onChange={setSelectedUnit} />
                    </div>
                    <div className="flex items-center gap-3">
                        <Label>Preço Un / Un Price</Label>
                        <input
                            type="number"
                            className="border rounded p-1 w-full"
                            value={unitPrice}
                            onChange={e => setUnitPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <Label>Moeda / Currency</Label>
                        <Combobox options={currencies} value={selectedCurrency} onChange={setSelectedCurrency} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Ref. Cliente / Customer Ref.</Label>
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={customerRef}
                        onChange={e => setCustomerRef(e.target.value)}
                    />
                </div>
                <div className="col-span-1 flex items-center gap-3"></div>
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Sustainable Comp.</Label>
                    <Combobox options={sustComp} value={selectedSustComp} onChange={setSelectedSustComp} />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>CS Style Ref.</Label>
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={csStyleRef}
                        onChange={e => setCsStyleRef(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Customer Barcode EAN13</Label>
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={barcode}
                        onChange={e => setBarcode(e.target.value)}
                    />
                </div>
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Peso/Weight - PK</Label>
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={boxWeight}
                        onChange={e => setBoxWeight(e.target.value)}
                    /> gr
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Peso Cx/Box Weight</Label>
                    <input
                        type="text"
                        value={boxWeightKG}
                        onChange={e => setBoxWeightKG(e.target.value)}
                        className="border rounded p-1 w-full"
                    /> Kg
                </div>
                <div className="col-span-1 flex items-center gap-3">
                    <Label>Medidas Cx/Box Measures</Label>
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={measure1}
                        onChange={e => setMeasure1(e.target.value)}
                    /> x
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={measure2}
                        onChange={e => setMeasure2(e.target.value)}
                    /> x
                    <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={measure3}
                        onChange={e => setMeasure3(e.target.value)}
                    /> cm
                </div>
            </div>

            <div className="flex justify-end gap-5 items-center">
                <div className="flex gap-3 items-center">
                    <p>Código Gerado / New Code Created:</p>
                    <p className="border rounded p-1 h-9 w-48 inline-block text-center">{generatedCode}</p>
                </div>
                <Button onClick={handleVerify}>Verificar / Verify</Button>
            </div>

            <div className="bg-gray-200 p-4 flex justify-end">
                <Button onClick={handleGravar}>Gravar</Button>
            </div>
        </div>
    );
}

export default FormMolecule;