import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";

import api from "./services/api";

const App = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      console.log(response.data);
      setProject(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Project ${projects.length}`,
      owner: "Felipe Novais",
    });
    const project = response.data;
    setProject([...projects, project]);
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.id}>
              {project.title}
            </Text>
          )}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProject}><Text>Adicionar projeto</Text></TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  project: {
    color: "#FFF",
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold' 
  }
});
