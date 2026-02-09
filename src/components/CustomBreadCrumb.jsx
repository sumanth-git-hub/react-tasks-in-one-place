import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useTheme } from "../hooks/UseTheme";

const CustomBreadCrumb = ({ item = [] }) => {

    const [darkMode] = useTheme()

  return (
    <div className={`customBreadCrumbWrap pt-15 w-full ${darkMode ? "darkModeActive bg-black" : "bg-white"}`}>
      <Breadcrumb>
        {item.map((getItem, index) => {
          // console.log(item.length);
          return (
            <BreadcrumbItem key={index}>
              {index === item?.length - 1 ? (
                <span className="last-item">{getItem?.name}</span>
              ) : (
                <Link to={getItem.route}>{getItem.name}</Link>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadCrumb;
