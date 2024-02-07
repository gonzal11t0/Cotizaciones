import React, { useEffect } from "react";
import '../styles/style.css';
import '../styles/button.css';
import '../styles/responsive.css';
import { Button } from "@mui/material";
import { useState } from "react";

const Arriba = () => {
    const [showButton, setShowButton] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            setShowButton(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

    return (
        <div className={`container-button ${showButton ? "show" : ""}`}>
            <Button id="button" variant="contained" color="success" onClick={scrollToTop }>
                Arriba
            </Button>
        </div>
    );
};

export default Arriba;
