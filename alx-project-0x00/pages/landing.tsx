import Card from "@/components/Card"
import Button from "@/components/button";

const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Click Me" styles="px-4 py-2 rounded-full mt-4" />
        </div>
    )

}

export default Landing 