import React from "react";
import DevComponents from "./DevComponent";

const DeveloperCardAnimation: React.FC = () => {
    return (
        <div className="grid grid-cols-1">
            <div className="col-span-1">
                <div className="overflow-x-auto max-w-full">
                    <div className="flex snap-x gap-8 lg:justify-center">
                        <div className="col-span-1 snap-center">
                            <DevComponents name="John Doe" imgPath="src/assets/94730271 (1).jpeg" description="Developer" github="github.com/johndoe" linkedin="linkedin.com/in/johndoe" email="johndoe@example.com" projects="Project A, Project B" />
                        </div>
                        <div className="col-span-1 snap-center">
                            <DevComponents name="Jane Smith" imgPath="src/assets/94730271 (1).jpeg" description="Designer" github="github.com/janesmith" linkedin="linkedin.com/in/janesmith" email="janesmith@example.com" projects="Project C, Project D" />
                        </div>
                        <div className="col-span-1 snap-center">
                            <DevComponents name="Alice Johnson" imgPath="src/assets/94730271 (1).jpeg" description="Engineer" github="github.com/alicejohnson" linkedin="linkedin.com/in/alicejohnson" email="alicejohnson@example.com" projects="Project E, Project F" />
                        </div>
                        <div className="col-span-1 snap-center">
                            <DevComponents name="Bob Brown" imgPath="src/assets/94730271 (1).jpeg" description="Manager" github="github.com/bobbrown" linkedin="linkedin.com/in/bobbrown" email="bobbrown@example.com" projects="Project G, Project H" />
                        </div>
                        <div className="col-span-1 snap-center">
                            <DevComponents name="Bob Brown" imgPath="src/assets/94730271 (1).jpeg" description="Manager" github="github.com/bobbrown" linkedin="linkedin.com/in/bobbrown" email="bobbrown@example.com" projects="Project G, Project H" />
                        </div>
                        <div className="col-span-1 snap-center">
                            <DevComponents name="Bob Brown" imgPath="src/assets/94730271 (1).jpeg" description="Manager" github="github.com/bobbrown" linkedin="linkedin.com/in/bobbrown" email="bobbrown@example.com" projects="Project G, Project H" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeveloperCardAnimation;