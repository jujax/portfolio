import JavascriptPlain from "devicons-react/lib/icons/JavascriptPlain";
import TypescriptPlain from "devicons-react/lib/icons/TypescriptPlain";
import PythonOriginalWordmark from "devicons-react/lib/icons/PythonOriginalWordmark";
import PythonPlainWordmark from "devicons-react/lib/icons/PythonPlainWordmark";
import CplusplusPlain from "devicons-react/lib/icons/CplusplusPlain";
import NodejsOriginalWordmark from "devicons-react/lib/icons/NodejsOriginalWordmark";
import NodejsPlainWordmark from "devicons-react/lib/icons/NodejsPlainWordmark";
import ExpressOriginalWordmark from "devicons-react/lib/icons/ExpressOriginalWordmark";
import ReactOriginalWordmark from "devicons-react/lib/icons/ReactOriginalWordmark";
import NestjsOriginalWordmark from "devicons-react/lib/icons/NestjsOriginalWordmark";
import AnsibleOriginalWordmark from "devicons-react/lib/icons/AnsibleOriginalWordmark";
import AnsiblePlainWordmark from "devicons-react/lib/icons/AnsiblePlainWordmark";
import TerraformOriginalWordmark from "devicons-react/lib/icons/TerraformOriginalWordmark";
import TerraformPlainWordmark from "devicons-react/lib/icons/TerraformPlainWordmark";
import DockerOriginalWordmark from "devicons-react/lib/icons/DockerOriginalWordmark";
import DockerPlainWordmark from "devicons-react/lib/icons/DockerPlainWordmark";
import KubernetesOriginalWordmark from "devicons-react/lib/icons/KubernetesOriginalWordmark";
import KubernetesPlainWordmark from "devicons-react/lib/icons/KubernetesPlainWordmark";
import GitlabOriginalWordmark from "devicons-react/lib/icons/GitlabOriginalWordmark";
import GitlabPlainWordmark from "devicons-react/lib/icons/GitlabPlainWordmark";
import GithubOriginalWordmark from "devicons-react/lib/icons/GithubOriginalWordmark";
import LinuxOriginal from "devicons-react/lib/icons/LinuxOriginal";
import LinuxPlain from "devicons-react/lib/icons/LinuxPlain";
import AmazonwebservicesOriginalWordmark from "devicons-react/lib/icons/AmazonwebservicesOriginalWordmark";
import AmazonwebservicesPlainWordmark from "devicons-react/lib/icons/AmazonwebservicesPlainWordmark";
import GooglecloudOriginalWordmark from "devicons-react/lib/icons/GooglecloudOriginalWordmark";
import PostgresqlOriginalWordmark from "devicons-react/lib/icons/PostgresqlOriginalWordmark";
import PostgresqlPlainWordmark from "devicons-react/lib/icons/PostgresqlPlainWordmark";
import RedisOriginalWordmark from "devicons-react/lib/icons/RedisOriginalWordmark";
import RedisPlainWordmark from "devicons-react/lib/icons/RedisPlainWordmark";
import SqliteOriginalWordmark from "devicons-react/lib/icons/SqliteOriginalWordmark";
import SqlitePlainWordmark from "devicons-react/lib/icons/SqlitePlainWordmark";
import MongodbOriginalWordmark from "devicons-react/lib/icons/MongodbOriginalWordmark";
import MongodbPlainWordmark from "devicons-react/lib/icons/MongodbPlainWordmark";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-baseline justify-center min-h-screen p-4">
        <h1>Hello World, I'm Julien</h1>
        <p className="text-xl">I´m a Fullstack developer</p>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Langages</h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
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
