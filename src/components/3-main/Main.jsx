import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects"
import { AnimatePresence, motion } from "framer-motion";




const Main = () => {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
    const handleClick = (buttonCategory) => {
        setcurrentActive("buttonCategory");
        const newArr = myProjects.filter((item) => {
            const zzz = item.category.find((myItem) => {
                return myItem === buttonCategory;
            });
            return zzz === buttonCategory;
        });
        setArr(newArr);

    }
    return (
        <main className="flex">
            <section className=" flex left-section">
                <button
                    onClick={() => {
                        setcurrentActive("all");
                        setArr(myProjects)
                    }}
                    className={currentActive === "all" ? "active" : null}
                >
                    all projects
                </button>
                <button
                    onClick={() => {
                        handleClick("css");
                    }}
                    className={currentActive === "css" ? "active" : null}
                >
                    HTML & CSS
                </button>
                <button
                    onClick={() => {
                        handleClick("js");
                    }}
                    className={currentActive === "js" ? "active" : null}
                >
                    Javascript
                </button>
                <button
                    onClick={() => {
                        handleClick("react");
                    }}
                    className={currentActive === "react" ? "active" : null}
                >
                    React & MUI
                </button>
                <button
                    onClick={() => {
                        handleClick("node");
                    }}
                    className={currentActive === "node" ? "active" : null}
                >
                    Node & Express
                </button>
            </section>

            <section className="flex right-section">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{type: "spring", damping: 8, stiffness: 50}}
                                key={item.imgPath} className="card">
                                <img
                                    width={266}
                                    src={item.imgPath}
                                    alt=""
                                />
                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Repellendus, sit nihil neque vitae dolorum dolorem?
                                    </p>
                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <div><a href="https://omarelmohamdy77.github.io/yummy-exam/"className="icon-link"target="_blank"></a></div>
                                            <div><a href="https://omarelmohamdy77.github.io/freshcart-react/"className="icon-github" target="_blank"></a>
                                            </div>
                                            <div></div>
                                        </div>
                                        <a className="link flex" href="https://omarelmohamdy77.github.io/yummy-exam/">
                                            more
                                            <span
                                                
                                                style={{ alignSelf: "end" }}
                                                className="icon-arrow-right"
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>
        </main>
    );
};
export default Main;
