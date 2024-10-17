import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <div className="container h-screen mb-32 mx-auto p-8">
      <div className="grid grid-cols-4 gap-4 relative">
        {/* Card 1 */}
        <div className="relative">
          <Card className="bg-white rounded-xl shadow-md w-full max-w-[280px] h-[320px] mx-auto relative">
            <CardContent className="p-3">
              <Image
                src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp"
                alt="Card 1 Image"
                width={200}
                height={200}
                className="w-full h-36 object-cover rounded-2xl "
              />
              <div className="p-1">
                <p className="text-sm text-gray-600">
                  This is the content for Card 1. It appears below the image and
                  provides context or description related to the visual content
                  above. It appears below the image and provides context or
                  description related to the visual content above.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="absolute -bottom-8 left-4 right-4 bg-white text-black  rounded-md shadow-lg">
          <div className="flex items-center bg-white rounded-lg p-4 shadow-md">
      {/* Text Section */}
      <h3 className="text-lg font-semibold text-black mr-4">Industry Expertise</h3>
      
      {/* Icon Section */}
      <div className="flex items-center justify-center bg-black rounded-full h-12 w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H8M17 7V16"
          />
        </svg>
      </div>
    </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative top-1/2">
          <div className="absolute -top-8 left-4 right-4 bg-primary text-primary-foreground p-2 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Card 2 Title</h3>
              <svg
                className="h-5 w-5 transform transition-transform duration-300 ease-in-out hover:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Card className="bg-white rounded-xl shadow-md w-full max-w-[280px] h-[320px] mx-auto relative mt-8">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                This is the content for Card 2. It's positioned below the title.
                This card starts halfway down the grid. This is the content for
                Card 2. It's positioned below the title. This card starts
                halfway down the grid.
              </p>
              <Image
                src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp"
                alt="Card 2 Image"
                width={200}
                height={200}
                className="w-full h-40 object-cover rounded-2xl "
              />
            </CardContent>
          </Card>
        </div>

        {/* Card 3 */}
        <div className="relative ">
          <Card className="bg-white rounded-xl shadow-md w-full max-w-[280px] h-[320px] mx-auto relative">
            <CardContent className="p-3">
              <Image
                src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp"
                alt="Card 3 Image"
                width={200}
                height={200}
                className="w-full h-36 object-cover rounded-2xl"
              />
              <div className="p-1">
                <p className="text-sm text-gray-600">
                  Here's the content for Card 3. Like Card 1, it's positioned
                  below the image and offers additional information or details.
                  Like Card 1, it's positioned below the image and offers
                  additional information or details.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="absolute -bottom-8 left-4 right-4 bg-primary text-primary-foreground p-2 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Card 3 Title</h3>
              <svg
                className="h-5 w-5 transform transition-transform duration-300 ease-in-out hover:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative top-1/2">
          <div className="absolute -top-8 left-4 right-4 bg-primary text-primary-foreground p-2 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Card 4 Title</h3>
              <svg
                className="h-5 w-5 transform transition-transform duration-300 ease-in-out hover:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Card className="bg-white rounded-xl shadow-md w-full max-w-[280px] h-[320px] mx-auto relative mt-8">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Here's the content for Card 4. Similar to Card 2, the text is
                below the title, and this card aligns with Card 2, starting
                halfway down the grid.
              </p>
              <Image
                src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728375387/webphome_r4zgw2.webp"
                alt="Card 4 Image"
                width={200}
                height={200}
                className="w-full h-40 object-cover rounded-2xl "
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
