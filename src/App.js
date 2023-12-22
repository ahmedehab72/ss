import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AppBar,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccountCircle, AddBox } from "@mui/icons-material";
// import { /* specific components or styles */ } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {StaticDatePicker} from "@mui/x-date-pickers/StaticDatePicker";
import { isBefore } from "date-fns";

const steps = ["Services", "Date & Time", "Finalizing"];

const handleChange = (event) => {
  console.log(event.target.checked);
};

const App = () => {


  const today = new Date();
  const onDateChanged = (date) => {
    // const distance = formatDistance(date, today);
    // const formattedDate = format(date, "d/M/");

    const isB = isBefore(date, today);

    console.log(isB);
  };

  const isDateInvalid = (date) => {
    return isBefore(date, today);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Hair Salon
            <Button color="inherit" component="div" sx={{ flexGrow: 2 }}>
              <AddBox></AddBox>
              New Booking
            </Button>
          </Typography>

          <AccountCircle />
        </Toolbar>
      </AppBar>

      <Stepper activeStep={0} alternativeLabel className="mt">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h1 className="ti">Services</h1>
      <Paper elevation={5} className=" w-500 mt-110 ml-65">
        <div class="col-md-4">
          <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 p-3 mt-5 css-aoeo82">
            <div class="d-flex">
              <button
                class="center MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root Mui-disabled flex-grow-1 mx-1 css-79xub"
                tabindex="-1"
                type="button"
                disabled=""
              >
                Back
              </button>
              <button
                class=" center MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root Mui-disabled flex-grow-1 mx-1 css-1hw9j7s"
                tabindex="-1"
                type="button"
                disabled=""
              >
                Next
              </button>
            </div>
            <div class="my-4 border-bottom">
              <h3>Hair Salon</h3>
              <div class="mx-3">
                <h6 className="font">
                  <svg
                    class="  MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LocationOnIcon"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>{" "}
                  Norway, Oslo
                </h6>
                <h6 className="font">
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="PermPhoneMsgIcon"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path>
                  </svg>{" "}
                  +4744226591
                </h6>
              </div>
            </div>
            <Alert severity="info">Your Services you check it!</Alert>
          </div>
        </div>
      </Paper>

      <Accordion className="ml w-55 mt-new ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Haircuts</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <h2>Adult Cut</h2>
          <h4>30 minutes</h4>
          <Typography>
            Looking for a quick haircut? This is the one for you
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2>Cut & Shampoo</h2>
          <h4>1 hours</h4>
          <Typography>
            This cut includes a shampoo service with some of our favorite
            professional products
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2>Cut, Shampoo & Basic Style</h2>
          <h4>45 minutes</h4>
          <Typography>
            After this blow-dry and brush-finished cut, you'll be ready for
            anything
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <h2>Cut, Shampoo & Full Style</h2>
          <h4>20 minutes</h4>
          <Typography>
            This cut option offers styling with hot tools to complete your new
            look
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="ml w-55 ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>All-Over Color</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <h2> Permanent</h2>
          <h4>30 minutes</h4>
          <Typography>
            (for gray coverage or going lighter or darker): Receive a
            professional hair color service performed by one of our experts to
            cover gray or to lighten or darken your natural hair color
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2>Semi</h2>
          <h4>1 hours</h4>
          <Typography>
            Looking for a new color, but not ready for a total commitment? Ask
            your stylist if semi-permanent is right for you. $400
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2>Specialty</h2>
          <h4>1 hours</h4>
          <Typography>
            Make a bold change with an on-trend color choice, including
            dimensional color, multiple colors, ombre/sombre, balayage, block
            color, color melt, and more. $400
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <h2>Gray Blending</h2>
          <h4>1 hours</h4>
          <Typography>
            Take the amount of gray in your hair down a notch, while maintaining
            a more natural look with this popular service.{" "}
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="ml w-55  ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Deep Conditioning Treatments</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <h2> Basic Conditioning</h2>
          <h4>30 minutes</h4>
          <Typography>
            This conditioning treatment provides intense moisture to strands and
            fortifies the hair with added protein. $129
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2> Specialty Conditioning</h2>
          <h4>1 hours</h4>
          <Typography>
            Customizable conditioning treatments specifically designed for what
            your hair needs most. Your stylist will create a formula for color
            treated hair, moisturizing, smoothing, or strengthening. $400
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2> Malibu</h2>
          <h4>1 hours</h4>
          <Typography>
            This two-step process first cleanses the hair of impurities and
            remove any build-up. Then the next step is an intense repair
            treatment that will leave your hair feeling stronger and
            shinier.400$
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="ml w-55  ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Waxing</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <h2>Brow Wax</h2>
          <h4>30 minutes</h4>
          <Typography>
            This service removes hair and exfoliates the skin, making make-up
            application smoother and helps open the look of your eyes with a
            natural brow arch. $129
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2>Facial Waxing</h2>
          <h4>1 hours</h4>
          <Typography>
            Creates smoothness along the lip-line or chin.400$
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="ml w-55    ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Special Services</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <h2>Formal Styling/Special Occasion Hair</h2>
          <h4>30 minutes</h4>
          <Typography>
            Special occasion styling includes braided up-styles, chignon, French
            twists, or any style to fit the event. $129
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>

        <AccordionDetails>
          <h2>Blow Outs</h2>
          <h4>1 hours</h4>
          <Typography>
            Enjoy a relaxing shampoo and a smooth blow out to de-frizz, create
            body and shine.400$
            <Checkbox onChange={handleChange} className="ml" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={today}
          onChange={onDateChanged}
          shouldDisableDate={isDateInvalid}
          // onChange={(newValue) => {
          //   setValue(newValue);
          // }}
          // renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

    </div>
  );
};

export default App;
