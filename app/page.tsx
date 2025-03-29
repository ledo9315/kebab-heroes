import { Container, Filters, ProductsGroupList, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      {/* <Container className="pt-10">
      </Container> */}

      <Container className="pb-14 mt-15">
        <TopBar className="mb-20"/>
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
            <ProductsGroupList title="Döner" items={[
                {
                  id: 1,
                  name: "Döner Kebab",
                  imageUrl:
                    "https://pngimg.com/uploads/kebab/kebab_PNG49.png",
                  price: 5.99,
                  items: [{ price: 5.99 }],
                },
                {
                  id: 2,
                  name: "Dürüm",
                  imageUrl:
                  "https://static.vecteezy.com/system/resources/previews/044/765/832/non_2x/fresh-doner-kebab-with-vegetables-png.png",
                  price: 4.99,
                  items: [{ price: 4.99 }],
                },
              ]} categoryId={0} />
              <ProductsGroupList
                title="Pizza"
                items={[
                  {
                    id: 1,
                    name: "Pizza Salami",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 5.99,
                    items: [{ price: 5.99 }],
                  },
                  {
                    id: 2,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 4.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 3,
                    name: "Pizza Hawaii",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 6.99,
                    items: [{ price: 6.99 }],
                  },
                  {
                    id: 4,
                    name: "Pizza Salami",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 5.99,
                    items: [{ price: 5.99 }],
                  },
                  {
                    id: 5,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 4.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 6,
                    name: "Pizza Hawaii",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 6.99,
                    items: [{ price: 6.99 }],
                  },
                ]}
                categoryId={1}
              />

                
              {/* <ProductCard id={0} name="Pizza Salami" price={5.99} imageUrl="https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif" /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
