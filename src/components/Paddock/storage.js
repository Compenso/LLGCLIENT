<div style = {containerStyle} >
  {paddocksArray.map(title => (
    <OnePaddock
      key={title}
      title={title}
    />
  ))}
</div>


// basic styling for Index values
const containerStyle = {
  display: 'flex',
  flexWrap: 'Wrap',
  padding: '30px'
}
