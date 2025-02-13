import {
  AmazonwebservicesOriginalWordmark,
  AmazonwebservicesPlainWordmark,
  AnsibleOriginalWordmark,
  AnsiblePlainWordmark,
  CplusplusPlain,
  DockerOriginalWordmark,
  DockerPlainWordmark,
  ExpressOriginalWordmark,
  GithubOriginalWordmark,
  GitlabOriginalWordmark,
  GitlabPlainWordmark,
  GooglecloudOriginalWordmark,
  JavascriptPlain,
  KubernetesOriginalWordmark,
  KubernetesPlainWordmark,
  LinuxOriginal,
  LinuxPlain,
  MongodbOriginalWordmark,
  MongodbPlainWordmark,
  NestjsOriginalWordmark,
  NodejsOriginalWordmark,
  NodejsPlainWordmark,
  PostgresqlOriginalWordmark,
  PostgresqlPlainWordmark,
  PythonOriginalWordmark,
  PythonPlainWordmark,
  ReactOriginalWordmark,
  RedisOriginalWordmark,
  RedisPlainWordmark,
  SqliteOriginalWordmark,
  SqlitePlainWordmark,
  TerraformOriginalWordmark,
  TerraformPlainWordmark,
  TypescriptPlain
} from "devicons-react";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1>Hello World, I'm Julien</h1>
        <p className="text-xl">I am Fullstack developper</p>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Langages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              <JavascriptPlain color="#f0db4f" size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              <TypescriptPlain color="#007acc" size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <PythonOriginalWordmark size="100%" />
              ) : (
                <PythonPlainWordmark color="#ffcf46" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              <CplusplusPlain color="#659ad2" size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frameworks & Libraries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <NodejsOriginalWordmark size="100%" />
              ) : (
                <NodejsPlainWordmark color="#68A063" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <ExpressOriginalWordmark size="100%" />
              ) : (
                <ExpressOriginalWordmark fill="white" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              <ReactOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              <NestjsOriginalWordmark size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">DevOps</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <AnsibleOriginalWordmark size="100%" />
              ) : (
                <AnsiblePlainWordmark color="white" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <TerraformOriginalWordmark size="100%" />
              ) : (
                <TerraformPlainWordmark color="#5c4ee5" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <DockerOriginalWordmark size="100%" />
              ) : (
                <DockerPlainWordmark color="#28b8eb" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <KubernetesOriginalWordmark size="100%" />
              ) : (
                <KubernetesPlainWordmark color="#326ce5" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <GitlabOriginalWordmark size="100%" />
              ) : (
                <GitlabPlainWordmark color="#fc6d26" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <GithubOriginalWordmark size="100%" />
              ) : (
                <GithubOriginalWordmark filter="invert(1)" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <LinuxOriginal size="100%" />
              ) : (
                <LinuxPlain color="white" size="100%" />
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center items-center max-w-2xl mx-auto">
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <AmazonwebservicesOriginalWordmark size="100%" />
              ) : (
                <AmazonwebservicesPlainWordmark color="#FF9900" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              <GooglecloudOriginalWordmark size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Databases
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <PostgresqlOriginalWordmark size="100%" />
              ) : (
                <PostgresqlPlainWordmark color="#336791" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <RedisOriginalWordmark size="100%" />
              ) : (
                <RedisPlainWordmark color="#d82c20" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <SqliteOriginalWordmark size="100%" />
              ) : (
                <SqlitePlainWordmark color="#69bae7" size="100%" />
              )}
            </div>
            <div className="w-24 md:w-32 lg:w-40 m-10px">
              {theme === "light" ? (
                <MongodbOriginalWordmark size="100%" />
              ) : (
                <MongodbPlainWordmark color="#57ae47" size="100%" />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
