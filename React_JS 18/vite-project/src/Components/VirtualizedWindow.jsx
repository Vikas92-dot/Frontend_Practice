import { FixedSizeList as List} from 'react-window';

const Row = ({index,style})=>(
    <div className='row' style={style}>
        Row{index}
    </div>
)

const VirtualizedWindow=()=>{
    return<>
        <List
            height={300}
            itemCount={1000}
            itemSize={35}
            width={300}
        >
            {Row}
        </List>
    </>
}
export default VirtualizedWindow;