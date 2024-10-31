import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {recipes,Recipes } from "@/data/datas"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"



export default function Home() {

  

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe:Recipes)=>(
        <Card key={recipe.id} className="flex flex-col justify-between">
          <CardHeader className="flex-row gap-4 items-center">

          <Avatar>
            <AvatarImage src={`/${recipe.image}`} alt="recipe-img"/>
            <AvatarFallback>{recipe.title.slice(0,2)}</AvatarFallback>
          </Avatar>
           

            <div>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.time} mins to cook</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <p>{recipe.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>View Recipe</Button>
            {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
          </CardFooter>

        </Card> 

        ))}
      </div>
    </main>
  );
}
