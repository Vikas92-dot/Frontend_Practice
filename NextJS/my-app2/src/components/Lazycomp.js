export default function Lazycomp(){
    console.log("Lazy loading component");
    
    return<>
        <div style={{margin:"30px"}}>
            Lazy loading in Next.js is a technique used to improve the performance and
            loading times of web applications built with the Next.js framework. With
            lazy loading, components or modules are loaded only when they are needed,
            rather than upfront when the page is initially rendered. This means that
            resources are fetched asynchronously, allowing the initial page load to be
            faster and reducing the overall bandwidth usage. Next.js provides built-in
            support for lazy loading through dynamic imports, allowing developers to
            split their code into smaller chunks and load them on demand. By
            implementing lazy loading, Next.js applications can deliver a smoother and
            more responsive user experience, particularly for larger applications with
            complex component hierarchies.
        </div>
    </>
}