import React, { useState, useEffect } from "react";
import { Tabs, Tab, Typography, Box, useTheme } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FadeInSection from "./FadeIn";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 3, py: 2 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => ({
  id: `tab-${index}`,
  "aria-controls": `tab-panel-${index}`,
});

interface ExperienceItem {
  jobTitle: string;
  duration: string;
  desc: string[];
}

const experienceItems: Record<string, ExperienceItem> = {
  "Smarter Grid Solutions": {
    jobTitle: "Graduate Apprentice Software Engineer @",
    duration: "OCT 2022 - PRESENT",
    desc: [
      "Led the development of a full-stack internal web application",
      "Contributed to Product Integration, UI modernisation and Platform modernisation across various customer-facing applications",
    ],
  },
};

const JobList: React.FC = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const updateOrientation = () => {
      setIsHorizontal(window.innerWidth < 600);
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  return (
<Box
  sx={{
    display: "flex",
    flexDirection: isHorizontal ? "column" : "row",
    backgroundColor: "var(--bg)",
    borderRadius: 2,
    width: "100%",
    minHeight: 300,
  }}
>
  <Tabs
    orientation={isHorizontal ? "horizontal" : "vertical"}
    variant={isHorizontal ? "fullWidth" : "scrollable"}
    value={value}
    onChange={(_, newValue) => setValue(newValue)}
    sx={{
      borderRight: isHorizontal ? "none" : "1px solid var(--highlight)",
      minWidth: isHorizontal ? "100%" : 200,
      "& .MuiTab-root": {
        color: "var(--text)",
        fontFamily: "NTR, sans-serif",
        fontWeight: "bold",
        alignItems: "flex-start",
      },
      "& .Mui-selected": {
        color: "var(--highlight) !important",
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "var(--highlight)",
      }
    }}
  >
    {Object.keys(experienceItems).map((key, i) => (
      <Tab
        key={key}
        label={isHorizontal ? `0${i}.` : key}
        {...a11yProps(i)}
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "var(--highlight)",
          "&.Mui-selected": {
            color: "var(--highlight)",
          },
        }}
      />
    ))}
  </Tabs>

  <Box sx={{ flexGrow: 1 }}>
    {Object.entries(experienceItems).map(([key, job], i) => (
      <TabPanel key={key} value={value} index={i}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--text)",
            fontFamily: "NTR, sans-serif",
          }}
        >
          {job.jobTitle}
          <span style={{ color: "var(--highlight)" }}> {key}</span>
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "1rem", color: "var(--text)", opacity: 0.7, mb: 2 }}>
          {job.duration}
        </Typography>

        <ul className="job-description">
          {job.desc.map((desc, j) => (
            <FadeInSection delay={`${j + 1}00ms`} key={j}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                <ArrowRightIcon sx={{ color: "var(--highlight)", mt: "5px", mr: 1 }} />
                <Typography
                  style={{
                    color: "var(--text)",
                    fontSize: "1.1rem",
                    fontFamily: "NTR, sans-serif"
                  }}
                >
                  {desc}
                </Typography>
              </Box>
            </FadeInSection>
          ))}
        </ul>
      </TabPanel>
    ))}
  </Box>
</Box>

  );
};

export default JobList;
