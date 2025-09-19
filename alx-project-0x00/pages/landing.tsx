import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return(
        <div className="p-10">
            <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
            <Card />

            <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold">Button Component Instances</h2>
                
                {/* --- Different Sizes --- */}
                <div className="flex items-center space-x-4">
                    <Button title="Small Button" styles="py-1 px-3 text-sm rounded-md" />
                    <Button title="Medium Button" styles="py-2 px-4 text-base rounded-md" />
                    <Button title="Large Button" styles="py-3 px-6 text-lg rounded-md" />
                </div>

                {/* --- Different Shapes --- */}
                <div className="flex items-center space-x-4">
                    <Button title="Square" styles="py-2 px-4 rounded-sm" />
                    <Button title="Rounded" styles="py-2 px-4 rounded-md" />
                    <Button title="Pill Shape" styles="py-2 px-4 rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Landing;