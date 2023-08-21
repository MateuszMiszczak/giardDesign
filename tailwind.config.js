/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1440px",
      },

      colors: {
        beige: "#DCC1AB",
        beigeLighter: "#e0c7b3",
        green: "#1B5B31",
        lighterGreen: "#497c5a",
        blackText: "#111",
        grayCustom: "#F5F0EC",
        grayCustomDarker: "#ddd8d4",
        whiteCustom: "#f9f9f9",
      },

      fontSize: {
        med: "28px",
        smBig: "40px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      letterSpacing: {
        xsMinus: "-0.12px",
        ssMinus: "-0.14px",
        smMinus: "-0.16px",
        mdHugeMinus: "-1.44px",
        mdMdMinus: "-1.4px",
        bigMinus: "-2px",
        mdPlus: "1px",
      },

      lineHeight: {
        sm: "18px",
        smBig: "21px",
        bigSm: "32.2px",
        big: "48px",
        bigLarge: "55.2px",
        largeBig: "70px",
      },

      borderWidth: {
        one: "1px",
      },

      borderRadius: {
        xs: "28px",
        big: "200px",
      },

      padding: {
        navPaddingBig: "24px 0",
        navPaddingSmall: "18px 0",
        navPaddingXs: "18px 0",
        buttonHeroGreen: "12px 24px 14px",
        buttonHeroSecondary: "12px 22px 14px",
        instaButton: "10px 24px 12px 24px",
        eyeIcon: "8px 0 7.04px",
        smMed: "60px",
        smMedMr: "62px",
        mdSm: "80px",
        med: "88px",
        medBig: "110px",
        big: "120px",
        large: "160px",
        largePlus: "256px",
      },

      gap: {
        sm: "5px",
        moreThanSm: "10px",
        x: "62px",
        xl: "72px",
        xxl: "120px",
        xxxxxl: "643px",
      },

      width: {
        navDesktopW: "1262px",
        contentHeroFirstDesktop: "599px",
        contentHeroFirstParagraph: "489.013px",
        heroArrowContainer: "48px",
      },

      maxWidth: {
        navDesktopMax: "100%",
      },

      height: {
        heroArrowContainer: "48px",
      },

      keyframes: {
        transfRight: {
          "0%": { transform: "translateX(0)" },
          "45%": { transform: "translateX(10px)" },
          "55%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },

        pulseHeart: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.1)" },
          "75%": { transform: "scale(0.9)" },
        },

        elevate: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          "100%": {
            transform: "translateY(-5px) scale(1.02)",
            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
          },
        },

        buttonMainHover: {
          "0%": {
            transform: "scale(1)",
            backgroundColor: "#1B5B31",
            boxShadow: "0 0 0 rgba(27, 91, 49, 0.5)",
          },
          "100%": {
            transform: "scale(1.05)", // Stay scaled up
            backgroundColor: "#80A87D", // Stay changed color
            boxShadow: "0 4px 6px rgba(27, 91, 49, 0.3)", // Stay shadowed
          },
        },

        buttonSecondaryHover: {
          "0%": {
            transform: "scale(1)",
            backgroundColor: "transparent",
            borderColor: "#1B5B31",
            color: "#1B5B31",
            opacity: 0.8,
          },
          "50%": {
            transform: "scale(.95)",
            backgroundColor: "rgba(27, 91, 49, 0.1)",
            borderColor: "#80A87D",
            color: "#1B5B31",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "transparent",
            borderColor: "#1B5B31",
            color: "#1B5B31",
            opacity: 0.8,
          },
        },
      },

      animation: {
        transfRight: "transfRight .8s ease-in-out infinite",
        pulseHeart: "pulseHeart .9s ease-in-out infinite",
        elevate:
          "elevate 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        buttonMainHover: "buttonMainHover 0.7s ease-in-out",
        buttonSecondaryHover: "buttonSecondaryHover 0.7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
