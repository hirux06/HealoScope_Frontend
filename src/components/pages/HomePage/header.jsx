import { Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-around">
      <div className="text-5xl p-20">
        Healo<span className="text-red-600">Scope</span>
      </div>
      <div className="flex items-center justify-around gap-10">
        <Button class="border-2 border-red-600 rounded-3xl hover:bg-red-600 hover:text-white p-3.5 hover:border-transparent">
          About Our Mission
        </Button>
        <Button class="border-2 border-red-600 hover:bg-red-600 hover:text-white rounded-3xl p-3.5 hover:border-transparent">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
