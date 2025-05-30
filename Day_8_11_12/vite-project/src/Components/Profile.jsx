import getImageUrl from "./utils"

function Avatar({person,size}){
        return<>
            <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />
        </>
    }

export default function Profile(){
    
    return<>
        <Avatar
            person={{name:'Lin Lanying', imageId:'1bX5QH6'}}
            size={100}
        />
        <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
        <Avatar
            person={{name:'Aklilu Lemma', imageId:'OKS67lh'}}
            size={50}
        />
    </>
}