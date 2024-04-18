import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { PizzaContext } from "../../context/PizzaContextProvider";

const PizzaOrdered = () => {
  const { state, dispatch } = useContext(PizzaContext);
  const [open, setOpen] = useState(false);

  const handleClickToggle = () => {
    setOpen(!open);
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="ordered">
      <Button
        variant="contained"
        onClick={handleClickToggle}
        className="btn-order"
        disabled={state.cart.length === 0}
      >
        Beställ
      </Button>
      <Dialog open={open}>
        <div className="dialog">
          <DialogTitle>Tack för beställningen!</DialogTitle>
          <DialogContent className="dialog-content">
            <Typography variant="body1">
              Din beställning har mottagits.
            </Typography>
            <Typography>Välkommen åter!</Typography>
          </DialogContent>
          <DialogActions>
            <Button className="action-btn" onClick={handleClickToggle}>
              X
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default PizzaOrdered;
