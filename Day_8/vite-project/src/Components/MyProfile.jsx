export default function MyProfile(){
    const user = {
        name: "Anime",
        imageUrl: "https://imgur.com/liYa3Xs.jpg",
        imageSize: 90,
    };
    return<>
        <h1>{user.name}</h1>
        <img className="avtar"  src={user.imageUrl} alt={'Photo of '+user.name} style={{width:user.imageSize, height: user.imageSize}} />
    </>
}