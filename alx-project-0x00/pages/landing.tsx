import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />


            <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold">Button Component Instances</h2>
                
                {/* --- Different Sizes --- */}
                <div className="flex items-center space-x-4">
                    <Button title="Small Button" size="small" />
                    <Button title="Medium Button" size="medium" />
                    <Button title="Large Button" size="large" />
                </div>

                {/* --- Different Shapes --- */}
                <div className="flex items-center space-x-4">
                    <Button title="Square" shape="square" />
                    <Button title="Rounded" shape="rounded" />
                    <Button title="Pill Shape" shape="pill" />
                </div>
            </div>
        </div>
    )

}


export default Landing 