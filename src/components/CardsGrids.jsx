import Card from '@/components/Card'

const CardsGrids = ({items, title}) => {

  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:gap-7 sm:px-6 sm:py-10 lg:grid-cols-3 lg:gap-8 lg:px-8 xl:grid-cols-4 xl:py-14'>
      <h2 className='col-span-full text-3xl font-black tracking-tight text-white sm:text-4xl'>{title}</h2>
      {items.map(({id, name, rating, image}, index) => (
          <Card key={index} name={name} ranking={rating} image={image} id={id}/>
      ))}
    </div>
  )
}

export default CardsGrids