"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  useDisclosure,
} from "@heroui/react";
import Login from "../Auth/Login";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "@/ThemeContext";
import SignUp from "../Auth/SignUp";

const Nav: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onOpenChange: onSignUpOpenChange,
  } = useDisclosure();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Navbar className="bg-white text-black border-b border-gray-200 dark:bg-black dark:text-white dark:border-gray-700">
      <NavbarBrand>
        <p className="font-bold text-2xl text-inherit">Notepad</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className=" ">
          <Button
            variant="flat"
            className="text-black dark:text-white"
            onPress={onOpen}
          >
            Login
          </Button>
          <Login isOpen={isOpen} onOpenChange={onOpenChange} />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-black dark:text-white"
            onPress={onSignUpOpen}
            variant="flat"
          >
            Sign Up
          </Button>
          <SignUp isOpen={isSignUpOpen} onOpenChange={onSignUpOpenChange} />
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            radius="full"
            onPress={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
          >
            {darkMode ? <SunDim /> : <Moon />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
