import {
    Card,
    Button
} from "flowbite-react";
import React from "react";
import { useState } from "react";
import ModalProduct from "./ModalProduct";
import { Link } from "@inertiajs/react";


export const Subproducts = ({ products }) => {
    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState({});

    function show(p) {
        setProduct(p);
        setOpenModal(!openModal);
    }

    return (
        <div>
            <Link href={route("categories.index")}> <Button className="m-2"> Back </Button></Link>
            <Card className="m-2">
                <div className="grid grid-cols-4">
                    {products.map((subproduct) => (
                        <div>
                            <Card
                                key={Math.random()}
                                className="m-2 max-w-sm"
                                imgSrc={`https://www.semprovec.com.ec/storage/${subproduct.fotsubproducto}`}
                            >
                                <div className="flex items-center overflow-hidden">
                                    <div className="bg-teal-800 p-2 rounded text-white align-middle">
                                        <p className="ml-2">
                                            {" "}
                                            Precio:
                                            {`$${subproduct.valrealsubproducto.toFixed(
                                                2
                                            )}`}
                                        </p>
                                    </div>
                                    <Button.Group
                                        outline
                                        className="hover:text-white "
                                    >
                                        <Button
                                            color="warning"
                                            onClick={() => show(subproduct)}
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
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
                                                    d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                                                />
                                            </svg>
                                        </Button>
                                        <Button color="success">
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="m5.5 7.7 1-2.7h11A56 56 0 0 1 19 9.7v.6l-.3.4a1 1 0 0 1-.4.2.8.8 0 0 1-.6 0 1 1 0 0 1-.4-.2l-.2-.4-.1-.6a1 1 0 1 0-2 0c0 .4-.1.7-.3 1a1 1 0 0 1-.7.3.9.9 0 0 1-.7-.3c-.2-.3-.3-.6-.3-1a1 1 0 1 0-2 0c0 .4-.1.7-.3 1a1 1 0 0 1-.7.3.9.9 0 0 1-.7-.3c-.2-.3-.3-.6-.3-1a1 1 0 0 0-2 0 1.5 1.5 0 0 1-.2.8l-.1.2a1 1 0 0 1-.4.2L6 11a1 1 0 0 1-.5-.3h-.1c-.2-.3-.4-.6-.4-1v-.2l.1-.5.4-1.3ZM4 12l-.1-.1A3.5 3.5 0 0 1 3 9.7l.2-1.2a26.3 26.3 0 0 1 1.4-4.2A2 2 0 0 1 6.5 3h11a2 2 0 0 1 1.8 1.2A58 58 0 0 1 21 9.7a3.5 3.5 0 0 1-.8 2.3l-.2.2V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4c0 .6-.4 1-1 1H6a2 2 0 0 1-2-2v-6.9Zm9 2.9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1v-2Z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </Button>
                                    </Button.Group>
                                </div>
                            </Card>{" "}
                        </div>
                    ))}
                </div>
            </Card>
            {openModal && product && (
                <ModalProduct producto={product} mostrar={openModal} cerrar={setOpenModal} />
            )}
        </div>
    );
};

export default Subproducts;
