import { useState } from "react";
import { FormContainer } from "../components/containers/FormContainer";
import { Button, Typography, Checkbox, FormControlLabel, Box } from "@mui/material";
import { useNavigate } from "react-router";

const UserSelectionPage = () => {
    const [selectedType, setSelectedType] = useState<"user" | "professional" | null>(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    const manageSelection = (type: "user" | "professional") => {
        setSelectedType(type);
        setTermsAccepted(false); // Resetea el checkbox si se cambia la opción
    };

    const manageContinue = () => {
        if (!termsAccepted) {
            alert("Debes aceptar los términos y condiciones para continuar.");
            return;
        }
        console.log(`Se seleccionó y se continúa en: ${selectedType}`);
        navigate(`/RegisterPage?type=${selectedType}`);
    };

    return (
        <FormContainer>
            <Typography variant="h5" align="center">Select Your Profile</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "1rem"}}>
                <Button variant="contained" color="primary" onClick={() => manageSelection("user")}>
                    User
                </Button>
                <Button variant="contained" color="secondary" onClick={() => manageSelection("professional")}>
                    Professional
                </Button>
            </Box>
           
            {selectedType && (
                <>
                    <Typography variant="body1" sx={{ textAlign: "center", marginTop: "1rem" }}>
                        {selectedType === "user"
                            ? "Términos y condiciones del Usuario...."
                            : "Términos y condiciones del Profesional"
                        }
                    </Typography>

                    <FormControlLabel
                        control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />}
                        label="Acepto los términos y condiciones"
                    />

                    <Button variant="contained" color="success" onClick={manageContinue}>
                        Continue
                    </Button>
                </>
            )}
        </FormContainer>
    );
};

export default UserSelectionPage;
