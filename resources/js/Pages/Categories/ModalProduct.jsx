import React from "react";
import {
    Button,
    TextInput,
    Modal,
    Label,
    Textarea,
    Radio,
} from "flowbite-react";
import { useState } from "react";

export const ModalProduct = ({ producto, mostrar, cerrar }) => {
    const [modalSize, setModalSize] = useState("4xl");

    return (
        <>
            {mostrar && (
                <Modal
                    show={mostrar}
                    onClose={() => cerrar(false)}
                    size={modalSize}
                >
                    <Modal.Header>Realizar Venta </Modal.Header>
                    <Modal.Body>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-3">
                                <TextInput
                                    id="id"
                                    placeholder="Id del Jugador"
                                    required
                                />
                                <TextInput
                                    id="apodo"
                                    placeholder="Apodo / Jugador (Opcional)"
                                />
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-l-md"
                                        placeholder="Ingrese texto aquí"
                                    />
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                                        Validar
                                    </button>
                                </div>

                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="producto"
                                        value="Producto"
                                    />
                                </div>
                                <Textarea
                                    id="producto"
                                    placeholder="Producto..."
                                    required
                                    value={producto.nomproducto}
                                    rows={3}
                                />

                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="tiempo"
                                        value="Tiempo de entrega"
                                    />
                                </div>
                                <TextInput
                                    id="tiempo"
                                    type="text"
                                    required
                                    shadow
                                />

                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="garantia"
                                        value="Garantía"
                                    />
                                </div>
                                <TextInput
                                    id="garantia"
                                    type="text"
                                    required
                                    shadow
                                />
                            </div>

                            <div>
                                <div className="flex gap-2 ">
                                    <div className="mb-2 block">
                                        <Label htmlFor="costo" value="Costo" />
                                        <TextInput
                                            id="costo"
                                            type="text"
                                            required
                                            shadow
                                            value={parseFloat(
                                                producto.valrealsubproducto
                                            ).toFixed(2)}
                                        />
                                    </div>

                                    <div className="mb-2 block">
                                        <Label htmlFor="pvp" value="P.V.P" />
                                        <TextInput
                                            id="pvp"
                                            type="text"
                                            required
                                            shadow
                                            value="1.51"
                                        />
                                    </div>
                                </div>

                                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-gray-500 font-semibold">
                                        Datos del ticket
                                    </h3>
                                    <div className="space-x-2">
                                        <Radio
                                            id="Sin-Ticket"
                                            name="countries"
                                            value="Sin Ticket"
                                            defaultChecked
                                        />
                                        <Label htmlFor="Sin-Ticket">
                                            Sin Ticket
                                        </Label>
                                    </div>
                                    <div className="space-x-2">
                                        <Radio
                                            id="generar-Ticket"
                                            name="countries"
                                            value="Generar Ticket"
                                            defaultChecked
                                        />
                                        <Label htmlFor="generar-Ticket">
                                            Generar y descargas ticket
                                        </Label>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center mt-2">
                                    <Button color="warning">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 text-white-800 font-extrabold dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18 18 6m0 12L6 6"
                                                />
                                            </svg>
                                            <div> Cancelar</div>
                                        </div>
                                    </Button>
                                    <Button color="success">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4 text-white-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m5 12 4.7 4.5 9.3-9"
                                                />
                                            </svg>
                                            <div> Vender </div>
                                        </div>
                                    </Button>
                                </div>
                                <p className="text-red-600 text-center">
                                    Antes de realizar esta venta debe acreditar
                                    saldo a su cuenta
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default ModalProduct;
