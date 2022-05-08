import React from "react";

const Blogs = () => {
  return (
    <div className="container py-6">
      <div>
        <h2 className="text-center text-2xl text-cyan-500 py-3">Difference between "javascript" and "nodejs"</h2>
        <div className=" text-slate-700 grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div>
            <p className=" text-center">
              NodeJS : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the
              javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs
              comes with a lot of modules and mostly used in web development.
            </p>
          </div>{" "}
          <div>
            <p>
              JavaScript : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that
              Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl text-cyan-500 py-3">
          When should you use "nodejs" and when should you use "mongodb"
        </h2>
        <div className=" text-slate-700 grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div>
            <p className=" text-center">
              Nodejs is a Javascript engine that you can write any application you want with (by programming in the
              Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can
              respond to web requests, though it can be used for lots of other types of code too.
            </p>
          </div>{" "}
          <div>
            <p>
              MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update
              data in a database. There are many web servers built with nodejs that will then use MongoDB for storing
              data.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl text-cyan-500 py-3">Differences between "sql" and "nosql" databases.</h2>
        <div className=" text-slate-700 grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div>
            <p className=" text-center">
              Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language
              for dealing with Relational Databases. A relational database defines relationships in the form of tables.
              SQL programming can be effectively used to insert, search, update, delete database records. That doesn't
              mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing
              and maintenance of databases.
            </p>
          </div>{" "}
          <div>
            <p>
              NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale.
              NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for
              Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect
              terabytes of user data every single day.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl text-cyan-500 py-3">What is the purpose of "jwt" and how does it work</h2>
        <div className=" text-slate-700 grid grid-cols-1">
          <div>
            <p className=" text-center">
              JWT, or JSON Web Token, is an open standard used to share security information between two parties — a
              client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed
              using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
