export interface QuestionStateInterface {
    id: number;
    category: string;
    question: string;
    answer: string;
}

export interface QuestionsState {
    questions: QuestionStateInterface[];
}

export const initialState: QuestionsState = {
    questions:
        [
            {
                id: 1,
                category:   "NgRx",
                question:   "What is NgRx and why do we use it in Angular applications?",
                answer:     `<p>NgRx is a state management library which is based on Redux principles. It helps us to manage complex application state in a predictable way using a single store, which is immutable, and unidirectional data flow.</p> 
                            <p> This makes debugging, scaling, and testing easier compared to ad-hoc service or BehaviorSubject approaches. </p>`
            },
            {
                id: 2,
                category:   "NgRx",
                question:   "What are the key concepts of ngrx and how do they work?",
                answer:     `<span>There are four key concepts in ngrx:</span>
                            <ul class="list-items">
                                <li><strong class="fw-semibold">Store:</strong> The Store is a centralized state container that holds the application state and allows components to access and update it.</li>
                                <li><strong class="fw-semibold">Actions:</strong> Objects that describe what happened in the application.</li>
                                <li><strong class="fw-semibold">Reducers:</strong> Reducers are pure functions that take the current state and an action as arguments and return a
                                        new state. They specify how the application's state changes in response to actions sent to the store.</li>
                                <li><strong class="fw-semibold">Selectors:</strong> Functions that extract specific pieces of state from the store.</li>
                            </ul>`
            },
            
            {
                id: 3,
                category:   "NgRx",
                question:   "What are Effects in NgRx?",
                answer:     "Effects are used to handle side effects in your application, such as fetching data from an API or performing other asynchronous operations. They listen for specific actions and can dispatch new actions based on the results of those operations."
            },
            
            {
                id: 4,
                category:   "NgRx",
                question:   "What is the difference between NgRx and Redux?",
                answer:     "NgRx is inspired by Redux but is specifically designed for Angular applications. It uses RxJS for handling asynchronous operations and provides additional features like Effects and Selectors that are not present in Redux."
            },
            {
                id: 5,
                category:   "NgRx",
                question:   "How do you handle side effects in NgRx?",
                answer:     "Side effects in NgRx are handled using Effects, which listen for specific actions and perform tasks such as making HTTP requests or interacting with external services, and then dispatch new actions based on the results."
            },
            {
                id: 6,
                category:   "NgRx",
                question:   "How do you set up NgRx in an Angular application?",
                answer:     "To set up NgRx in an Angular application, you need to install the @ngrx/store package, create a StoreModule in your AppModule, define your state, actions, reducers, and selectors, and then use the Store service to dispatch actions and select state in your components."
            },

            {
                id: 7,
                category:   "Angular",
                question:   "What is lazy loading in Angular and how does it improve application performance?",
                answer:     "Lazy loading in Angular is a design pattern where feature modules are loaded only when their routes are accessed, instead of at application startup. This reduces the initial bundle size, improves performance, and makes large applications more scalable. For example, a dashboard or reports module can be lazy-loaded so users only download it when they navigate there, not at app launch."
            },
            {
                id: 8,
                category:   "Angular",
                question:   "What are pure Pipes in angular?",
                answer:     "In Angular, pure pipes are the default type of pipes that only re-run when Angular detects a pure change—meaning a change in primitive values (string, number, boolean, symbol) or a change in object references (arrays, objects, dates). They do not re-execute for in-place mutations of objects or arrays, which makes them highly performant."
            },
            {
                id: 9,
                category:   "JavaScript",
                question:   "What is the difference between let, const, and var in JavaScript?",
                answer:     "In JavaScript, let and const are block-scoped variables introduced in ES6, while var is function-scoped. let allows reassignment of its value, whereas const declares a constant reference to a value that cannot be reassigned. var can be hoisted and is function-scoped, which can lead to unexpected behavior in certain scenarios."
            },
            {
                id: 10,
                category:   "JavaScript",
                question:   "What are closures in JavaScript?",
                answer:     "A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope even after the outer function has finished executing. Closures are commonly used for data privacy and creating functions with persistent state."
            },
            {
                id: 11,
                category:   "JavaScript",
                question:   "What is the difference between slice() and splice() in JavaScript?",
                answer:     `<ul class="list-items">
                                <li><strong class="fw-semibold">slice():</strong> is a method that returns a shallow copy of a portion of an array into a new array, without modifying the original array. It takes two arguments: the start index and the end index (exclusive).</li>
                                <li><strong class="fw-semibold">splice():</strong> is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It takes three arguments: the start index, the number of elements to remove, and any number of elements to add.</li>
                            </ul>`
                
                  
            },
            {
                id: 12,
                category:   "JavaScript",
                question:   "what is the difference between == and === in JavaScript?",
                answer:     "In JavaScript, == is the equality operator that performs type coercion, meaning it converts the operands to the same type before making the comparison. For example, 5 == '5' would return true because the string '5' is coerced to the number 5. On the other hand, === is the strict equality operator that does not perform type coercion and requires both the value and type to be the same for it to return true. So, 5 === '5' would return false because they are of different types."
            }
        ]
}



