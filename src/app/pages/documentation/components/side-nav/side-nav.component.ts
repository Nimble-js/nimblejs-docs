import { WebComponent, Style } from "@christianarchuleta/nimblejs";
import { MenuItemComponent } from "./menuitem/menuitem.component";
import html from './side-nav.component.html';
import scss from './side-nav.component.scss';
import { SideNavType } from "./side-nav.type";
import { SubsectionComponent } from "./subsection/subsection.component";

export class SideNavComponent extends WebComponent {

    name = 'sidenav';
    template = html;
    styles = [new Style(scss)];
    MenuItemComponent = MenuItemComponent;
    SubsectionComponent = SubsectionComponent;

    // exampleData: SideNavType = {
    //     primaryMenuList: [
    //         {
    //             header: "Menu 1",
    //             menuItems: [
    //                 {
    //                     text: "Item 1.1",
    //                     items: [],
    //                     html: "<p>E Pluribus Unum</p>",
    //                     type: "menu"
    //                 },
    //                 {
    //                     text: "Item 1.2",
    //                     items: [],
    //                     html: "<p>E Pluribus Unum</p>",
    //                     type: "menu"
    //                 },
    //                 {
    //                     text: "Subitem 1.2.1",
    //                     items: [],
    //                     html: "<p>E Pluribus Unum</p>",
    //                     type: 'subsection'
    //                 },
    //             ],
    //         },
    //         {
    //             header: "Menu 2",
    //             menuItems: [
    //                 {
    //                     text: "Item 2.1",
    //                     items: [],
    //                     html: "<p>E Pluribus Unum</p>",
    //                     type: "menu"
    //                 },
    //                 {
    //                     text: "Item 2.2",
    //                     items: [
    //                         {
    //                             text: "Subitem 2.2.1",
    //                             items: [],
    //                             html: "<p>E Pluribus Unum</p>",
    //                             type: 'subsection'
    //                         },
    //                         {
    //                             text: "Subitem 2.2.2",
    //                             items: [],
    //                             html: "<p>E Pluribus Unum</p>",
    //                             type: 'subsection'
    //                         },
    //                     ],
    //                     html: "<p>E Pluribus Unum</p>",
    //                     type: "menu"
    //                 },
    //             ],
    //         },
    //     ]
    // };
    documentation: SideNavType = {
        primaryMenuList: [
            {
                header: "Introduction",
                menuItems: [
                    {
                        text: "Overview",
                        html: `<h2>Overview</h2>
                        <p>Nimble is a JavaScript framework designed to compete with Angular and React, with a strong emphasis on performance and ease of development. It provides developers with a versatile toolset for building modern web applications.</p>
                        
                        <p>Key features and highlights of Nimble:</p>
                        <ul>
                            <li>Efficient Component Management: Nimble simplifies component management and ensures efficient rendering.</li>
                            <li>Template-Based Rendering: Create dynamic UIs using templates that can be easily integrated into your components.</li>
                            <li>Event Handling: Nimble supports HTML event attributes for interactive user experiences.</li>
                            <li>Navigation Control: Easily handle soft and hard navigation within your application.</li>
                            <li>Modules and Services: Organize your application with modules and encapsulate functionality using services.</li>
                            <li>Routing: Configure routing for your application and handle navigation seamlessly.</li>
                        </ul>
                        
                        <p>Whether you're building a single-page application or a complex web platform, Nimble's modular and performance-oriented approach makes it a valuable choice for modern web development projects.</p>
                        `,
                        type: "menu",
                        items: [
                            {
                                text: "Efficient Component Management",
                                type: "subsection",
                                html: `
                                    <p>Nimble's component management system is engineered for efficiency and performance. It ensures that your web application runs smoothly, even when dealing with complex component hierarchies.</p>
                                    <p>With Nimble, you can create, update, and render components with minimal overhead. The framework optimizes the rendering process to achieve high performance, making it an excellent choice for modern web development.</p>
                                `
                            },
                            {
                                text: "Template-Based Rendering",
                                type: "subsection",
                                html: `
                                    <p>Nimble's template-based rendering allows you to define dynamic user interfaces with ease. Templates provide a structured way to describe how your components should render.</p>
                                    <p>Templates in Nimble support conditional rendering, loops, and data binding. You can build complex UIs by composing templates and integrating them seamlessly into your components.</p>
                                `
                            },
                            {
                                text: "Event Handling",
                                type: "subsection",
                                html: `
                                    <p>Nimble simplifies event handling in web applications. You can use HTML event attributes like (click), (change), and (input) to respond to user interactions.</p>
                                    <p>Event handlers in Nimble are easy to implement and customize. You can define functions that execute specific actions when events occur, providing an interactive and responsive user experience.</p>
                                `
                            },
                            {
                                text: "Navigation Control",
                                type: "subsection",
                                html: `
                                    <p>Nimble empowers you to take control of navigation in your web application. Whether you need soft navigation within the app or hard navigation with page refresh, Nimble has you covered.</p>
                                    <p>With Nimble's navigation mechanisms, you can create seamless user journeys, update the URL, and manage state transitions with confidence. Navigate between views, components, and routes effortlessly.</p>
                                `
                            },
                            {
                                text: "Modules and Services",
                                type: "subsection",
                                html: `
                                    <p>Organize your application's codebase effectively using Nimble's modules and services. Modules help you structure your project, while services encapsulate and manage functionality.</p>
                                    <p>Modules provide a clear separation of concerns, making your codebase more maintainable. Services enable you to share functionality across components and modules, promoting code reuse and efficiency.</p>
                                `
                            },
                            {
                                text: "Routing",
                                type: "subsection",
                                html: `
                                    <p>Routing in Nimble simplifies the configuration of navigation paths in your application. Define routes and map them to components to create a coherent user experience.</p>
                                    <p>Nimble's routing system allows you to handle URL changes, route parameters, and view transitions effortlessly. Configure your routes, and let Nimble take care of the rest.</p>
                                `
                            }
                        ]
                    }
                ]
            },
            {
                header: "Getting Started",
                menuItems: [
                    {
                        text: "Setting Up Nimble",
                        html: "<h2>Setting Up Nimble</h2><p>Getting started with Nimble is straightforward. Follow these steps to set up your project with Nimble:</p>",
                        type: "menu",
                        items: [
                            {
                                text: "Step 1: Initialize Your npm Project",
                                type: "subsection",
                                html: `
                                    <p>Before integrating Nimble into your project, you'll need to initialize an npm project. If you don't already have one, navigate to your project directory and run the following command:</p>
                                    <pre><code>npm init</code></pre>
                                    <p>Follow the prompts to configure your project, or simply press Enter to accept the default settings. This step will create a package.json file for your project.</p>
                                `
                            },
                            {
                                text: "Step 2: Install Nimble and Required Dependencies",
                                type: "subsection",
                                html: `
                                    <p>To start using Nimble in your project, you need to install Nimble itself along with some required dependencies. Nimble relies on several core libraries and tools to function properly. Here's what you need to install:</p>
                                    <ul>
                                        <li><strong>Nimble:</strong> Nimble is the main library that powers your web application. It provides a framework for building efficient, component-based applications with a focus on performance and ease of development.</li>
                                        <li><strong>TypeScript:</strong> Nimble is written in TypeScript, so you'll need TypeScript as a peer dependency to enable type checking and support for TypeScript code in your project.</li>
                                        <li><strong>Webpack:</strong> Webpack is a powerful bundler that Nimble relies on for packaging your application's assets, scripts, and stylesheets into a single bundle for deployment. Nimble works seamlessly with Webpack to optimize your application's performance.</li>
                                        <li><strong>Webpack Loaders:</strong> You'll require several Webpack loaders to handle different file types and assets. These include:
                                            <ul>
                                                <li><strong>ts-loader:</strong> This loader allows Webpack to transpile TypeScript code into JavaScript, making it compatible with browsers.</li>
                                                <li><strong>css-loader:</strong> The css-loader is essential for handling CSS files, including SCSS files when combined with sass-loader.</li>
                                                <li><strong>sass-loader:</strong> If you're using SCSS for styling, sass-loader is necessary to compile SCSS into CSS during the build process.</li>
                                                <li><strong>html-loader:</strong> Nimble uses HTML templates, so html-loader is required to process HTML files and include them in your application.</li>
                                            </ul>
                                        </li>
                                        <li><strong>HtmlWebpackPlugin:</strong> HtmlWebpackPlugin simplifies the creation of an HTML file to serve your bundled JavaScript and CSS files. It ensures that your Webpack bundles are correctly injected into the HTML file.</li>
                                    </ul>
                                    <p>These dependencies are essential for setting up a Nimble project. You can install them all with the following npm command:</p>
                                    <pre><code>npm install nimblejs typescript webpack webpack-cli ts-loader css-loader sass-loader html-loader html-webpack-plugin --save-dev</code></pre>
                                    <p>With Nimble and its dependencies installed, you'll be ready to create powerful web applications with enhanced performance and development efficiency.</p>
                                `
                            },
                            {
                                text: "Step 3: Create Essential Project Files",
                                type: "subsection",
                                html: `
                                    <p>Next, create the essential files required for your Nimble-based project:</p>
                                    <ul>
                                        <li><strong>index.ts:</strong> This is your application's entry point. You can use this file to bootstrap your Nimble application, importing necessary modules and components.</li>
                                        <li><strong>index.scss:</strong> This global SCSS file will be loaded into the browser and should contain global styles applicable to your entire application.</li>
                                        <li><strong>index.html:</strong> The HTML file that serves as the entry point for your web application.</li>
                                    </ul>
                                    <p>These files are essential for setting up your Nimble project structure and defining how your application will be loaded.</p>
                                `
                            },
                            {
                                text: "Step 4: Configure Webpack",
                                type: "subsection",
                                html: `
                                    <p>Nimble projects require Webpack for bundling and serving your application locally. You should have a webpack configuration file (webpack.config.js) in your project directory.</p>
                                    <p>Here's a sample webpack.config.js:</p>
                                    <pre><code>const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./index.ts', './index.scss'],
    module: {
        rules: [
            {
                test: path.resolve(__dirname, "./index.scss"),
                loader: 'style-loader',
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "css-loader", 'sass-loader'
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, 'interface/*'), 'node_modules'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nimbledocs.js'
    },
    plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html'), inject: true }), new CopyWebpackPlugin({
        patterns: [{ from: 'src/assets', to: 'assets' }]
    })],
    devServer: {
        historyApiFallback: true
    },

};</code></pre>
                                    <p>Ensure you have the necessary loaders and plugins configured, such as ts-loader, css-loader, and HtmlWebpackPlugin, to handle TypeScript, SCSS, and HTML files.</p>
                                    <p>In your tsconfig.json, please make sure you include nimble's type loaders. For example...</p>
                                    <code>["./src", "./node_modules/nimblejs/interface/component/web"]</code>

                                    `
                            },
                            {
                                text: "Step 5: Organize Assets",
                                type: "subsection",
                                html: `
                                    <p>Your Nimble project can make use of the /src/assets folder to store and organize assets like images, fonts, and other resources used in your application. Keep your assets organized within this directory for easy access and management.</p>
                                `
                            },
                            {
                                text: "Step 6: Start Developing with Nimble",
                                type: "subsection",
                                html: `
                                    <p>With Nimble and your project configured, you're ready to start developing your web application. Create components, define routes, and leverage Nimble's powerful features to build efficient and dynamic web applications with ease.</p>
                                `
                            }
                        ]
                    }
                ]
            },
            {
                header: "Technology",
                menuItems: [
                    {
                        text: "Core Concepts",
                        type: "menu",
                        html: `
                            <h2>Core Concepts</h2><p>Nimble introduces several core concepts that form the foundation of your web application development. Understanding these concepts is crucial for effectively using Nimble to build powerful and performant applications. Here are the key core concepts:</p>
                        `,
                        items: [
                            {
                                text: "1. Web Components",
                                type: "subsection",
                                html: `
                                <h3>Overview</h3>
                                <p><strong>Web Components</strong> are the fundamental building blocks of Nimble applications. They encapsulate both the structure (HTML) and style (CSS/SCSS) of specific parts of your web application, along with their associated behavior (JavaScript). Web components promote modularity and reusability, allowing you to create self-contained units of functionality that can be easily integrated into your application.</p>
                        
                                <h3>Implementation</h3>
                                <p>To create a web component in Nimble, follow these steps:</p>
                                <ol>
                                    <li>Extend the <code>WebComponent</code> class provided by Nimble.</li>
                                    <li>Define the component's template using HTML, incorporating placeholders for dynamic data and event handlers.</li>
                                    <li>Specify the component's styles using CSS or SCSS, ensuring encapsulation to prevent style conflicts.</li>
                                    <li>Add any necessary event handling and behavior methods to the component.</li>
                                </ol>
                        
                                <h3>Usage</h3>
                                <p>Once you've created a web component, you can use it throughout your application by including its key as follows: [key]. Nimble will handle rendering the component and managing its lifecycle.</p>
                        
                                <h3>Example</h3>
                                <p>Here's an updated example of a simple web component that displays a button and logs a message to the console when clicked:</p>
                                <pre><code>
class MyButtonComponent extends WebComponent {
    template = '&lt;button (click)="this.logMessage()"&gt;Click Me&lt;/button&gt;';
    name = "MyButton" // make sure this does not contain an underscore.
    logMessage() {
        console.log("Hello World!");
    }
}
                                </code></pre>
                                <p>In this example, we've defined a <code>MyButtonComponent</code> class that extends <code>WebComponent</code>. It specifies a template containing a button element with a click event that calls the <code>logMessage()</code> method. When the button is clicked, it logs "Hello World!" to the console.</p>
                                <p>Generally, each component should also have a name property given, this allows the html created to be more readable, but Nimble can handle without. </p>

                                `
                            },
                            {
                                text: "2. Templates",
                                type: "subsection",
                                html: `
                                <h3>Overview</h3>
                                <p><strong>Templates</strong> in Nimble are a powerful way to define the structure and content of your web components. They allow you to create dynamic, data-driven views by combining HTML with directives such as *if and *each. Nimble templates are flexible and can be defined inline or in separate HTML files, which can then be imported into your components.</p>
                        
                                <h3>Implementation</h3>
                                <p>To define a template in Nimble:</p>
                                <ol>
                                    <li>Include the template string within your web component class.</li>
                                    <li>Utilize *if and *each directives within the template to conditionally render content or iterate over data.</li>
                                    <li>Optionally, you can import templates from external HTML files using ES6 imports.</li>
                                </ol>
                        
                                <h3>Usage</h3>
                                <p>Templates define the structure of your web components and dictate how data is displayed. You can bind data properties from your component to elements in the template, allowing for dynamic rendering based on your application's state.</p>
                        
                                <h3>Example</h3>
                                <p>Here's an example of a Nimble component with an inline template that demonstrates the usage of *if and *each directives:</p>
                                <pre><code>
class MyListComponent extends WebComponent {
    data = {
        items: ["Item 1", "Item 2", "Item 3"],
        showItems: true
    };

    template = \`
        &lt;div&gt;
            &lt;h3&gt;My List&lt;/h3&gt;
            { { *each(data.items => item) } }
                { { item } }
            { {/each } }
            
        &lt;/div&gt;
    \`;
}
                                </code></pre>
                                <p>In this example, we've created a <code>MyListComponent</code> with an inline template. The template includes an *if directive to conditionally render a list of items and an *each directive to iterate over the items array. Data properties from the component's <code>data</code> object are bound to elements in the template using double curly braces ({{ }}).</p>
                                <p>However, instead of <code>{ {</code> - use it without the space. Same for the closing tags. <code>} }</code>
                                <p>You can also import templates from external files and use them in your components:</p>
                                <pre><code>
// Import an HTML template file
import myTemplate from './my-template.html';

class MyComponentWithImportedTemplate extends WebComponent {
    template = myTemplate;
}
                                </code></pre>
                                <p>In this case, <code>myTemplate</code> is imported from an external HTML file and used as the template for <code>MyComponentWithImportedTemplate</code>.</p>
                            `
                            },
                            {
                                text: "3. Styles",
                                type: "subsection",
                                html: `
                                <h3>Overview</h3>
                                <p><strong>Styles</strong> in Nimble allow you to define the visual appearance of your web components. Nimble supports various styling options, including SCSS, SASS, CSS, and inline styles. You can define styles within your components using the <code>style</code> property, or you can import styles from external files. Additionally, styles defined in the global <code>index.scss</code> file will be applied to all WebComponents within your project.</p>
                        
                                <h3>Implementation</h3>
                                <p>To define styles in Nimble:</p>
                                <ol>
                                    <li>Include the <code>style</code> property within your web component class.</li>
                                    <li>Specify your styles as a string using SCSS, SASS, or CSS syntax. You can use the <code>Style.parse()</code> method to define inline styles.</li>
                                    <li>Optionally, you can import styles from external SCSS or CSS files using ES6 imports.</li>
                                </ol>
                        
                                <h3>Usage</h3>
                                <p>Styles allow you to control the visual presentation of your web components. You can define class names or inline styles and apply them to HTML elements within your templates. Nimble will automatically handle the inclusion of styles in the rendered output.</p>
                        
                                <h3>Example</h3>
                                <p>Here's an example of a Nimble component with inline styles and an import of an external SCSS file:</p>
                                <pre><code>
import { Style } from 'nimblejs';
import scss from './my-component.scss';
                        
class MyComponentWithStyles extends WebComponent {
    style = Style.parse(\`
        .my-component {
            background-color: lightblue;
            padding: 10px;
        }
    \`);
    styles = [new Style(scss), style]
    
    template = \`
        &lt;div class="my-component"&gt;
            &lt;p&gt;Styled Component&lt;/p&gt;
        &lt;/div&gt;
    \`;
}
                                </code></pre>
                                <p>In this example, we've created a <code>MyComponentWithStyles</code> component with an inline style defined using the <code>style</code> property. Additionally, we import an external SCSS file (<code>my-component.scss</code>) to apply styles to the component. The class name <code>my-component</code> is used within the template to apply the styles.</p>
                        
                                <p>Styles defined in the <code>my-component.scss</code> file:</p>
                                <pre><code>
.my-component {
    font-size: 16px;
    color: white;
}
                                </code></pre>
                                <p>Styles defined in the <code>index.scss</code> file will also be applied to this component, allowing for a cohesive and consistent visual style across all components in your project.</p>
                            `
                            },
                            {
                                text: "4. Event Handling",
                                type: "subsection",
                                html: `
                                <h3>Overview</h3>
                                <p><strong>Event Handling</strong> in Nimble allows you to capture and respond to user interactions within your web components. Nimble supports event handling using a straightforward syntax, such as <code>(click)="someFunction()"</code> for click events and <code>(href)="./someUrl"</code> for soft navigation.</p>
                        
                                <h3>Implementation</h3>
                                <p>To implement event handling in Nimble:</p>
                                <ol>
                                    <li>Within your HTML template, use the <code>(event)="handlerFunction(parameter)"</code> syntax to define event handlers. Events can include <code>click</code>, <code>input</code>, <code>change</code>, and more.</li>
                                    <li>Create corresponding handler functions in your web component class to respond to the events. These functions can accept parameters to capture data from the event.</li>
                                    <li>For soft navigation, use the <code>(href)="path/to/route"</code> syntax within an <code>&lt;a&gt;</code> tag to trigger internal routing changes without full page reloads.</li>
                                </ol>
                        
                                <h3>Data Flow</h3>
                                <p>Data flow in Nimble's event handling is seamless. When an event is triggered, the associated handler function is called, allowing you to update the component's state, perform actions, or interact with other components.</p>
                        
                                <h3>Routing Changes</h3>
                                <p>For routing changes, Nimble provides a soft navigation mechanism using the <code>(href)="path/to/route"</code> syntax. When a user clicks an element with this attribute, Nimble handles the routing internally, updating the URL without a full page reload. This enables smooth navigation between components within your application.</p>
                        
                                <h3>Example</h3>
                                <p>Here's an example of event handling and routing changes in Nimble:</p>
                                <pre><code>
class MyComponent extends WebComponent {
    message = '';

    handleButtonClick() {
        this.message = 'Button Clicked!';
    }

    template = \`
        &lt;div&gt;
            &lt;p&gt;{ { this.message } }&lt;/p&gt;
            &lt;button (click)="handleButtonClick()"&gt;Click Me&lt;/button&gt;
            &lt;a (href)="./other-page"&gt;Go to Another Page&lt;/a&gt;
        &lt;/div&gt;
    \`;
}
                                </code></pre>
                                <p>In this example, we've created a <code>MyComponent</code> with a message that changes when the button is clicked. The button click event is captured using the <code>(click)="handleButtonClick()"</code> syntax. Additionally, the <code>(href)="./other-page"</code> syntax is used for soft navigation to another page.</p>
                            `
                            },
                            {
                                text: "5. Routing and Navigation",
                                type: "subsection",
                                html: `
                                <h3>Overview</h3>
                                <p><strong>Routing and Navigation</strong> in Nimble is a critical feature that allows you to build single-page applications with multiple views or pages. Nimble offers a flexible and easy-to-use routing system that supports module-level routing and dynamic route handling.</p>
                        
                                <h3>RouteRoot</h3>
                                <p><code>RouteRoot</code> is an essential interface in Nimble that represents the root component of your application. It defines the initial set of routes and handles internal navigation events. The <code>RouteRoot</code> interface typically includes the following properties and methods:</p>
                                <ul>
                                    <li><code>routes</code>: An array of route objects that define URL paths and associated keys.</li>
                                    <li><code>onInternalNavigate(event: any, pathRequested: string): void</code>: A method to handle internal navigation events triggered by elements with <code>(href)="path/to/route"</code> attributes.</li>
                                    <li><code>currentRouteKey</code>: A property to track the current active route key.</li>
                                </ul>
                        
                                <h3>Module-Level Routing</h3>
                                <p>In Nimble, you can implement module-level routing, where each module manages its routes independently. A module should maintain a tree of RouteRoots. To achieve this, follow these steps:</p>
                                <ol>
                                    <li>Create a module for each route or section of your application. Modules can define their routes and components.</li>
                                    <li>Register the modules with the <code>Nimble</code> class during the application's initialization.</li>
                                    <li>Use the <code>(href)="path/to/route"</code> attribute in your templates to trigger internal navigation to the specified route.</li>
                                </ol>
                        
                                <h3>Usage</h3>
                                <p>Here's an example of routing and navigation in Nimble:</p>
                                <pre><code>
import { RouteRoot, Nimble, WebComponent } from 'nimblejs';

// Define the root component with initial routes
class App implements RouteRoot {
    routes = [
        { url: '/', key: 'home' }, // The key is not actually intended to be 'home', you will need to fetch this key or maintain a reference to this key in the component.
        { url: '/about', key: 'about' }, // The key is not actually intended to be 'about', you will need to fetch this key or maintain a reference to this key in the component.
        { url: '/contact', key: 'contact' } // The key is not actually intended to be 'contact', you will need to fetch this key or maintain a reference to this key in the component.
    ];

    currentRouteKey = 'home';

    initialize() {
        if (!this.routes.map((o: any) => o.url).includes(window.location.pathname)) {
            console.error('Page not found, routing to 404...');
            this.navigate('/404')
        }
    }

    getCurrentRouteKey() {
        return this.routes.find((r: any) => r.url === window.location.pathname)?.key
    }

    onInternalNavigate(event: any, routeRequested: string): void {
        this.currentRouteKey = this.getCurrentRouteKey();
        if (!this.routes.map((o: any) => o.url).includes(window.location.pathname)) {
            console.error('Page not found, routing to 404...');
            this.navigate('/404')
        }
    }
}
// Define a component for the 'about' route
class AboutComponent extends WebComponent {
    template = '&lt;h1&gt;About Us&lt;/h1&gt;';
}
                                </code></pre>
                                <p>In this example, we define a root component (<code>App</code>) that implements the <code>RouteRoot</code> interface, specifying the initial routes and handling internal navigation events. We also register a module-level component for the 'about' route and trigger navigation using the <code>(href)="path/to/route"</code> attribute in the templates.</p>
                            `
                            },
                            {
                                text: "6. Services",
                                type: 'subsection',
                                html: `
                                <h3>Overview</h3>
                                <p><strong>Services</strong> in Nimble are reusable components that provide specific functionality or data across the application. They are designed to manage shared logic, data fetching, or any other cross-component functionality. Services promote code modularity and maintainability by centralizing common tasks.</p>
                        
                                <h3>Service Class</h3>
                                <p>The core of the service concept in Nimble is the <code>Service</code> class. This class provides a structure for creating and managing services. A service typically includes the following characteristics:</p>
                                <ul>
                                    <li>Singleton Pattern: Services are implemented as singletons, ensuring there is only one instance throughout the application.</li>
                                    <li>Global Access: Services can be accessed globally from any component, making them ideal for sharing data or functionality.</li>
                                    <li>Initialization: Services may perform initialization tasks in their constructor.</li>
                                </ul>

                                <p>Make sure the service is provided to the Module so that it can handle it's construction and availability.</p>
                        
                                <h3>Usage</h3>
                                <p>Here's an example of how to create and use a service in Nimble:</p>
                                <pre><code>
import { Service } from 'nimblejs';

// Define a sample service
class DataService extends Service {
    data: any[] = [];

    constructor() {
        super();
        this.data = [1, 2, 3, 4, 5];
    }

    fetchData() {
        // Simulate fetching data
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.data);
            }, 1000);
        });
    }
}


// Access the service from a component
import { DataService } from './somepath';
class ExampleComponent extends WebComponent {
    async initialize() {
        const dataService = DataService.getInstance(DataService);
        const data = await dataService.fetchData();
        console.log(data);
    }
}
                                </code></pre>
                                <p>In this example, we define a <code>DataService</code> class that extends <code>Service</code>. The service initializes with some data and provides a <code>fetchData</code> method. A component (<code>ExampleComponent</code>) can then access the service using <code>DataService.getInstance()</code> and utilize its functionality.</p>
                            `
                            }
                        ]
                    },
                ]
            },
            {
                header: "Best Practices",
                menuItems: [
                    {
                        text: "Core Values",
                        html: `
                        <h2>Core Values</h2>
                        <h3>1. Modularization</h3>
                        <p><strong>Modularize your code:</strong> Break down your application into modular components and services. This promotes code reusability and maintainability. Each component should have a specific responsibility, making it easier to manage and test.</p>
                
                        <h3>2. Services for Shared Logic</h3>
                        <p><strong>Use services for shared logic:</strong> Utilize Nimble services to encapsulate shared functionality, such as data fetching, authentication, or business logic. Services are singletons that can be accessed across components, reducing code duplication.</p>
                
                        <h3>3. Template Reusability</h3>
                        <p><strong>Reuse templates:</strong> Take advantage of template reuse with Nimble's *if and *each directives. You can define reusable templates in separate .html files and import them into components. This enhances code maintainability and keeps templates clean.</p>
                
                        <h3>4. Styles and CSS Preprocessing</h3>
                        <p><strong>Optimize styles:</strong> Use CSS preprocessor support (SCSS, SASS, CSS) to create maintainable and organized stylesheets. Styles defined in the global /index.scss file are automatically applied to all components, ensuring a consistent look and feel.</p>
                
                        <h3>5. Event Handling</h3>
                        <p><strong>Follow event handling conventions:</strong> Nimble supports event handling through attributes like (click) and (href). Use these conventions consistently to maintain a clear and predictable event flow. Document your event-driven logic for easy understanding.</p>
                
                        <h3>6. Routing and Navigation</h3>
                        <p><strong>Implement routing carefully:</strong> Nimble provides routing capabilities for creating single-page applications. Define routes in modules and utilize the RouteRoot interface for route management. Be mindful of route hierarchies and ensure proper navigation within your app.</p>
                
                        <h3>7. Code Organization</h3>
                        <p><strong>Organize your project:</strong> Follow a structured directory layout for your Nimble project. Separate components, services, distinct custom stylesheets, distinct custom templates, and assets into distinct folders to maintain a clear project structure. Use meaningful names for files and classes.</p>
                
                        <h3>8. Error Handling</h3>
                        <p><strong>Handle errors gracefully:</strong> Implement error handling mechanisms for services and components. Use try-catch blocks or Promise rejection handling to gracefully manage errors and provide meaningful feedback to users.</p>
                
                        <h3>9. Testing</h3>
                        <p><strong>Write tests:</strong> Embrace unit and integration testing to ensure the reliability of your Nimble application. Use testing frameworks like Jest or Jasmine and testing utilities to verify the behavior of components, services, and routing.</p>
                
                        <h3>10. Documentation</h3>
                        <p><strong>Document your code:</strong> Maintain clear and up-to-date documentation for your Nimble application. Describe the purpose and usage of components, services, and modules. Include examples and usage guidelines to assist other developers working on the project.</p>
                    `,
                        type: "menu"
                    }
                ]
            },
            {
                header: "FAQs",
                menuItems: [
                    {
                        text: "Common Questions",
                        html: `
                        <h2>Common Questions</h2>
                        <h3>1. What is Nimble?</h3>
                        <p><strong>Nimble</strong> is a modern JavaScript framework designed for building efficient and high-performance web applications. It emphasizes ease of development and offers features for creating modular, maintainable, and scalable single-page applications (SPAs).</p>
                
                        <h3>2. How do I install Nimble?</h3>
                        <p>To install Nimble as a development dependency in your project, run:</p>
                        <pre><code>npm install nimblejs --save-dev</code></pre>
                
                        <h3>3. What are the key features of Nimble?</h3>
                        <p>Nimble provides several key features, including:</p>
                        <ul>
                            <li>Component-based architecture for building reusable UI elements.</li>
                            <li>Support for HTML templates with conditional and loop directives.</li>
                            <li>Efficient event handling for user interactions.</li>
                            <li>Client-side routing and navigation for SPAs.</li>
                            <li>Integration with CSS preprocessors (SCSS, SASS, CSS).</li>
                        </ul>
                
                        <h3>4. How do I create a WebComponent in Nimble?</h3>
                        <p>To create a WebComponent, extend the <code>WebComponent</code> class provided by Nimble. Define the <code>template</code> and <code>styles</code> properties, and implement any event handlers or logic specific to your component.</p>
                
                        <h3>5. Can I use external CSS libraries with Nimble?</h3>
                        <p>Yes, you can include external CSS libraries or stylesheets in your Nimble project. Simply import the CSS file in your component or the global <code>index.scss</code> file, and the styles will be applied accordingly.</p>
                
                        <h3>6. How does routing work in Nimble?</h3>
                        <p>Nimble offers client-side routing for single-page applications. You can define routes in modules using the <code>RouteRoot</code> interface. When users navigate to specific URLs, Nimble handles routing and displays the corresponding components.</p>
                
                        <h3>7. What are Nimble services?</h3>
                        <p>Nimble services are utility classes designed for encapsulating shared functionality. They can be used to manage data fetching, authentication, or other common tasks across components. Services are singletons accessible throughout the application.</p>
                
                        <h3>8. How can I test my Nimble application?</h3>
                        <p>Nimble applications can be tested using JavaScript testing frameworks like Jest or Jasmine. Write unit tests for components, services, and routing logic to ensure the reliability of your application. Nimble provides utilities for testing components and services.</p>
                
                        <h3>9. Where can I find documentation and resources for Nimble?</h3>
                        <p>Comprehensive documentation and resources for Nimble can be found on the official Nimble website and GitHub repository. You can access guides, tutorials, and examples to help you get started and make the most of the framework.</p>
                
                        <h3>10. Can I use Nimble for building both small and large-scale applications?</h3>
                        <p>Yes, Nimble is designed to be flexible and can be used for projects of various sizes. Whether you're building a small web app or a complex enterprise application, Nimble's modular architecture and performance-focused design can accommodate your needs.</p>
                
                        <h3>11. Is Nimble suitable for mobile app development?</h3>
                        <p>Nimble primarily targets web applications, but it can be used to build responsive web apps that work well on mobile devices. By optimizing your Nimble app's layout and styles, you can create mobile-friendly experiences.</p>
                
                        <h3>12. Does Nimble have built-in support for internationalization (i18n)?</h3>
                        <p>Nimble does not have native i18n features, but you can integrate popular JavaScript i18n libraries with your Nimble application to support multiple languages and localization.</p>
                
                        <h3>13. How can I handle user authentication in a Nimble app?</h3>
                        <p>You can implement user authentication in Nimble by creating authentication-related components and services. Nimble's flexible architecture allows you to integrate with authentication providers and manage user sessions.</p>
                
                        <h3>14. What is the performance of Nimble compared to other JavaScript frameworks?</h3>
                        <p>Nimble places a strong emphasis on performance optimization, and it shows. Nimble out-performs it's competitors by a factor of 10+. It uses efficient rendering techniques to minimize unnecessary updates, resulting in competitive performance. However, specific performance comparisons may vary depending on the application's complexity and usage.</p>
                        <p>As an example, this documentation site builds in under a twentieth of a second, and you can measure loadtime and performance for this site on your machine.</p>
                
                        <h3>15. Can I use third-party libraries and packages with Nimble?</h3>
                        <p>Yes, you can integrate third-party libraries and packages into your Nimble project. Nimble is compatible with the npm ecosystem, allowing you to install and use a wide range of libraries and tools to enhance your application.</p>
                
                        <h3>16. How do I handle data fetching in Nimble?</h3>
                        <p>Nimble provides flexibility for data fetching. You can use Nimble services or external libraries like Axios or Fetch API to retrieve data from APIs or other sources. Data can be managed centrally or within individual components, depending on your application's needs.</p>
                
                        <h3>17. What is the recommended folder structure for a Nimble project?</h3>
                        <p>While Nimble does not enforce a specific folder structure, it is advisable to organize your project in a way that promotes modularity and maintainability. Common directories include <code>components</code> for UI elements, <code>services</code> for utility functions, and <code>modules</code> for route-specific logic.</p>
                
                        <h3>18. Can I use TypeScript with Nimble?</h3>
                        <p>Yes, Nimble fully supports TypeScript. You can write your Nimble components and services using TypeScript for enhanced type checking and code reliability.</p>
                
                        <h3>19. Does Nimble have a dedicated developer community?</h3>
                        <p>Yes, Nimble has an active and growing developer community. You can connect with other Nimble developers on Github or other social media platforms to share knowledge and seek assistance with your projects.</p>
                
                        <h3>20. Is Nimble suitable for real-time applications or chat applications?</h3>
                        <p>Nimble is versatile and can be used for various types of applications, including real-time and chat applications. You can leverage Nimble's event handling and data synchronization capabilities to build interactive and responsive real-time features.</p>
                    `,
                        type: "menu"
                    }
                ]
            }
        ]
    };

}