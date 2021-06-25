import React from "react";
import { Link } from "react-router-dom";

export default function CSSDemo ()  {
    return <div>
        <Link to="/box-model">盒模型</Link>
        <Link to="/flex-box">flex布局</Link>
    </div>;
}