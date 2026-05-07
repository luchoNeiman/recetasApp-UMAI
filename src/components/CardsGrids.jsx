import Card from '@/components/Card'

const CardsGrids = ({items, title}) => {

  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:gap-7 sm:px-6 sm:py-10 lg:grid-cols-3 lg:gap-8 lg:px-8 xl:grid-cols-4 xl:py-14'>
      <h2 className='col-span-full text-3xl font-black tracking-tight sm:text-4xl' style={{ color: '#7c2d12' }}>{title}</h2>
      {items.map(({id, name, rating, image, cuisine, difficulty}) => (
          <Card key={id} id={id} name={name} rating={rating} image={image} cuisine={cuisine} difficulty={difficulty}/>
      ))}
    </div>
  )
}

export default CardsGrids