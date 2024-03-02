import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "@inertiajs/react";

export const Index = ({ categories, products }) => {
    return (
        <div>
            {categories.map((category) => (
                <div key={category.idclasificacion}>
                    <Card className="m-2">
                        {category.nomclasificacion}
                        <div className="flex flex-row flex-wrap gap-2">
                            {products
                                .filter(
                                    (product) =>
                                        category.idclasificacion ===
                                        product.idclasificacion
                                )
                                .map((product) => (
                                    <Link href={route('subproducts', product.idproducto)}>
                                    <Card key={product.idproducto}>
                                        {product.nomproducto}
                                    </Card>
                                    </Link>
                                ))}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Index;
