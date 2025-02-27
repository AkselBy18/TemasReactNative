import * as SQLite from 'expo-sqlite';
import { Activity } from '../interfaces/activity.interface';

export const db = SQLite.openDatabaseSync('database_to_do.db');

export const createTableActivity = async () => {
    try {
      // Sentencia SQL para crear la tabla
      const sqlStatement = `
        CREATE TABLE IF NOT EXISTS activities (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT NOT NULL
        );
      `;
      await db.execAsync(sqlStatement);
      console.log('TABLA DE ACTIVIDADES CREADA CON ÉXITO!!!');
    } catch (error) {
      console.error('ERROR al crear la tabla de actividades:', error);
    }
  };

export const insertActivity = async (activity: Activity) => {
  try {
    await db.runAsync(
      `INSERT INTO activities (name, description) VALUES (?, ?);`,
      [activity.name, activity.description]
    )
    console.log('Actividad agregada');
  } catch (error) {
    console.log(`error insertActivity: ${error}`);
    
  }
}

export const updateActivity = async (activity: Activity) => {
  try {
    await db.runAsync(
      'UPDATE activities SET name = ?, description = ? WHERE id = ?',
      [activity.name, activity.description, activity.id]
    )
    console.log('Actividad actualizada');
  } catch (error) {
    console.log(`error updateActivity: ${error}`);
  }
}

export const deleteActivity = async (id: number) => {
  try {
    await db.runAsync('DELETE FROM activities WHERE id = ?', id);
    console.log('Actividad eliminada', id);    
  } catch (error) {
    console.log(`error deleteActivity: ${error}`);
  }
}

export const getActivities = async () => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM activities;`, []);
    console.log('Actividaes obtenidas con exito', result);    
    return result as Activity[];
  } catch (error) {
    console.log(`error getActivities: ${error}`);
    return [];
  }
}