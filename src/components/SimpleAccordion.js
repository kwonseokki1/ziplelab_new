import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div style={{ width: "60%", borderRadius: 0 }}>
      <Accordion
        sx={{
          bgcolor: "transparent",
          padding: "15px",
          borderTop: "1px solid #ffffff",
          borderRadius: "unset",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#ffffff",
            }}
          >
            HomePage Mro
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1rem", color: "#ffffff" }}>
            - 홈페이지 유지보수 <br />- 반응형 웹사이트 유지보수
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          padding: "15px",
          borderTop: "1px solid #ffffff",
          borderRadius: "unset",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#ffffff",
            }}
          >
            Web/Responsive Website
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1rem", color: "#ffffff" }}>
            - 홈페이지 유지보수 <br />- 반응형 웹사이트 유지보수
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          padding: "15px",
          borderTop: "1px solid #ffffff",
          borderRadius: "unset",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#ffffff",
            }}
          >
            Hybrid App
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1rem", color: "#ffffff" }}>
            - 홈페이지 유지보수 <br />- 반응형 웹사이트 유지보수
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          padding: "15px",
          borderTop: "1px solid #ffffff",
          borderRadius: "unset",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#ffffff",
            }}
          >
            Marketing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1rem", color: "#ffffff" }}>
            - 홈페이지 유지보수 <br />- 반응형 웹사이트 유지보수
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          padding: "15px",
          borderTop: "1px solid #ffffff",
          borderRadius: "unset",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#ffffff",
            }}
          >
            Branding
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1rem", color: "#ffffff" }}>
            - 홈페이지 유지보수 <br />- 반응형 웹사이트 유지보수
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
